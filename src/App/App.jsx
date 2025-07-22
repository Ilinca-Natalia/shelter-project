import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Despre from '../pages/despre';
import Animale from '../pages/animale';
import Contact from '../pages/Contact';
import Doneaza from '../pages/Doneaza';
import Adopta from '../pages/Adopta';
import Programeaza from '../pages/vizita';
import AnimalDetalii from '../pages/AnimalDetalii';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/animale" element={<Animale />} />
        <Route path="/animale/:id" element={<AnimalDetalii />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/doneaza" element={<Doneaza />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vizita" element={<Programeaza />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
