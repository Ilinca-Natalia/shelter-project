import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './vizita.css'; 

function Vizita() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuxzfrf', 'template_85qyb23', form.current, 'rr_WLkfDVn3ZqXQkU')
      .then(() => {
        alert("Cererea de vizită a fost trimisă!");
        form.current.reset();
      }, (error) => {
        console.error(error);
        alert("A apărut o eroare. Încearcă din nou.");
      });
  };

  return (
    <div className="vizita-page">
      <h2> 🐶 Programează o vizită </h2>
      <p>Completează formularul de mai jos pentru a putea vizita adăpostul nostru. Toate cererile sunt analizate individual.</p>


      <form ref={form} onSubmit={handleSubmit} className="vizita-form">
        <h3>📅 Programează o vizită</h3>

        <label htmlFor="nume">Nume și prenume</label>
        <input type="text" name="user_name" id="nume" placeholder="Ex: Ana Popescu" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" id="email" placeholder="ana@email.com" required />

        <label htmlFor="telefon">Telefon</label>
        <input type="tel" name="user_phone" id="telefon" placeholder="07..." required />

        <label htmlFor="motiv">Motivul vizitei</label>
        <textarea name="visit_reason" id="motiv" placeholder="Scrie în câteva cuvinte motivul vizitei..." required />

        <button type="submit">Trimite solicitarea</button>
      </form>
    </div>
  );
}

export default Vizita;
