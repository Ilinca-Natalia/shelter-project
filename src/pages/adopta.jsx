import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './adopta.css';

function Adopta() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuxzfrf', 'template_ghkjztp', form.current, 'rr_WLkfDVn3ZqXQkU')
      .then(() => {
        alert("Cererea de adopție a fost trimisă cu succes!");
        form.current.reset();
      }, (error) => {
        alert("Eroare la trimiterea formularului.");
        console.log(error.text);
      });
  };

  return (
    <div className="adopta-page">
      <h2>🐶 Formular de adopție</h2>
      <p>Completează formularul de mai jos pentru a iniția procesul de adopție. Toate cererile sunt analizate individual.</p>

      <form ref={form} onSubmit={sendEmail} className="adopta-form">

        <label htmlFor="name">Nume și prenume:</label>
        <input type="text" name="user_name" id="name" placeholder="Numele complet" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" id="email" placeholder="Adresa de email" required />

        <label htmlFor="phone">Telefon:</label>
        <input type="tel" name="user_phone" id="phone" placeholder="Număr de telefon" required />

        <label htmlFor="reason">De ce dorești să adopți?</label>
        <textarea name="adoption_reason" id="reason" placeholder="Scrie motivul tău..." required />

        <label htmlFor="desired_animal">Ce animal îți dorești să adopți de la noi?</label>
        <textarea name="desired_animal" id="desired_animal" placeholder="Scrie numele animalului dorit..."required />

         <label>
          <input type="checkbox" name="has_pets" value="Da" />
          Am deja alte animale acasă
        </label>

        <label>
          <input type="checkbox" name="financial_ready" value="Da" />
          Sunt pregătit financiar pentru îngrijirea unui animal
        </label>

        <label>
          <input type="checkbox" name="permanent_home" value="Da" />
          Pot oferi un cămin stabil și permanent
        </label>

        <label htmlFor="pickup_date">📆 Când ai fi disponibil să preiei animalul?</label>
        <input type="date" name="pickup_date" id="pickup_date" required />

        <label>🧾 Poți semna un contract de adopție?</label>
        <div className="radio-group">
          <label><input type="radio" name="can_sign_contract" value="Da" required /> Da</label>
          <label><input type="radio" name="can_sign_contract" value="Nu" /> Nu</label>
        </div>

        <label htmlFor="contact_method">📞 Cum preferi să fii contactat?</label>
        <select name="contact_method" id="contact_method" required>
          <option value="">Selectează o opțiune</option>
          <option value="email">Email</option>
          <option value="telefon">Telefon</option>
          <option value="whatsapp">WhatsApp</option>
        </select>

        <button type="submit">Trimite cererea</button>
      </form>
    </div>
  );
}

export default Adopta;
