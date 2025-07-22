import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Descriere scurtă */}
        <div className="footer-section">
          <h3>Adăpostul Speranței</h3>
          <p>
            Adoptă, nu cumpăra! Oferim o nouă șansă animalelor fără stăpân
            și sprijinim fiecare suflet să își găsească o familie iubitoare.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FiPhone /> <a href="tel:+40712345678">+40 712 345 678</a></p>
          <p><FiMail /> <a href="mailto:contact@adapostsperantei.ro">contact@adapostsperantei.ro</a></p>
          <p><FiMapPin /> Str. Prieteniei 1, Pitești</p>
        </div>

        {/* Linkuri utile */}
        <div className="footer-section">
          <h4>Linkuri utile</h4>
          <ul>
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="/animale">Animale disponibile</Link></li>
            <li><Link to="/despre">Despre noi</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Adăpostul Speranței. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}

export default Footer;
