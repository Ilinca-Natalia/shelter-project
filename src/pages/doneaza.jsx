import React, { useState } from 'react';
import './doneaza.css';

function Doneaza() {
  const [suma, setSuma] = useState('');
  const [donatieTip, setDonatieTip] = useState('unica');
  const sumeFixe = [20, 50, 100, 200];

  const handleSumaFixClick = (valoare) => {
    setSuma(valoare.toString());
  };

  const handleSumaPersonalizataChange = (e) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setSuma(val);
    }
  };

  const handleDonatieTipChange = (e) => {
    setDonatieTip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!suma || parseInt(suma) === 0) {
      alert('Te rugăm să introduci o sumă validă.');
      return;
    }
    alert(`Mulțumim pentru donația de ${suma} lei (${donatieTip === 'lunara' ? 'lunară' : 'unică'})!`);
    setSuma('');
    setDonatieTip('unica');
  };

  return (
    <div className="doneaza-page">
      <h2>🐶 Susține adăpostul nostru cu o donație</h2>
      <p>Alege suma și tipul donației. Fiecare contribuție contează pentru viața animăluțelor noastre!</p>

      <form className="doneaza-form" onSubmit={handleSubmit}>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="donatieTip"
              value="unica"
              checked={donatieTip === 'unica'}
              onChange={handleDonatieTipChange}
            />
            Donație unică
          </label>
          <label>
            <input
              type="radio"
              name="donatieTip"
              value="lunara"
              checked={donatieTip === 'lunara'}
              onChange={handleDonatieTipChange}
            />
            Donație lunară
          </label>
        </div>

        <label>Alege o sumă fixă:</label>
        <div className="buttons-sume">
          {sumeFixe.map((valoare) => (
            <button
              key={valoare}
              type="button"
              className={suma === valoare.toString() ? 'selected' : ''}
              onClick={() => handleSumaFixClick(valoare)}
            >
              {valoare} lei
            </button>
          ))}
        </div>

        <label htmlFor="suma-personalizata">Sau introdu o sumă personalizată:</label>
        <input
          id="suma-personalizata"
          type="text"
          placeholder="Ex: 75"
          value={suma}
          onChange={handleSumaPersonalizataChange}
        />

        <div className="detalii-plata">
          <p><strong>Cont bancar:</strong> RO49AAAA1B31007593840000</p>
          <p><strong>PayPal:</strong> donate@adapostulnostru.ro</p>
        </div>

        <button type="submit" disabled={!suma || parseInt(suma) === 0}>
          Donează acum
        </button>
      </form>
    </div>
  );
}

export default Doneaza;
