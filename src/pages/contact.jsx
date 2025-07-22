import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuxzfrf', 'template_85qyb23', form.current, 'rr_WLkfDVn3ZqXQkU')
      .then(() => {
          alert("Mesaj trimis cu succes!");
          form.current.reset();
      }, (error) => {
          alert("Eroare la trimitere.");
          console.log(error.text);
      });
  };

  return (
    <div className="contact-page">
  <h2>🐾 Contact</h2>
        <p>
          Pentru mai multe informații sau întrebări, nu ezita să ne contactezi. Suntem aici să te ajutăm!
        </p>

  <div className="map-and-info">
    
    <div className="map-info-wrapper">
      <div className="map-container" role="region" aria-label="Hartă locație adăpost animale">
        <iframe
          title="Hartă adăpost animale"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.4560759136736!2d24.858504776250964!3d44.8508210710701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b272fb394ae5d3%3A0x4f88b9489a2f0ef0!2sStrada%20Preteniei%2C%20Pite%C8%99ti!5e0!3m2!1sro!2sro!4v1720874047349!5m2!1sro!2sro"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0, borderRadius: '20px' }}
        ></iframe>
      </div>
      <div className="contact-info">
        <h3>Informații de contact</h3>
        <p><strong>Adresă:</strong> Str. Prieteniei 1, Pitești</p>
        <p><strong>Telefon:</strong> +40 712 345 678</p>
        <p><strong>Email:</strong> contact@adapostsperantei.ro</p>
      </div>
    </div>

    
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2>Trimite-ne un mesaj</h2>
     <label htmlFor="name">Nume:</label>
     <input type="text" name="user_name" id="name" placeholder="Numele complet" required />

    <label htmlFor="email">Email:</label>
    <input type="email" name="user_email" id="email" placeholder="Adresa de email" required />

    <label htmlFor="subject">Subiect:</label>
    <input type="text" name="subject" id="subject" placeholder="Introdu un subiect" required />

   <label htmlFor="message">Mesaj:</label>
    <textarea name="message" id="message" placeholder="Mesajul tău..." required />

    <button type="submit">Trimite</button>
</form>


  </div>
</div>

  );
}

export default Contact;
