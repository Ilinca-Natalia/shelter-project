import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">🐾 Adăpostul Speranței</Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Acasă</Link></li>
          <li><Link to="/despre" onClick={() => setMenuOpen(false)}>Despre</Link></li>
          <li><Link to="/animale" onClick={() => setMenuOpen(false)}>Animale disponibile</Link></li>
          <li><Link to="/adopta" onClick={() => setMenuOpen(false)}>Adopta</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
