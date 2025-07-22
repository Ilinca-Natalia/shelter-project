import React from 'react';
import Slider from 'react-slick';
import './despre.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiHeart, FiActivity, FiHome, FiBookOpen } from 'react-icons/fi';

import test1 from '../assets/vet.jpg';
import test2 from '../assets/vol.jpg';
import test3 from '../assets/ingrijitor.jpg';

function Despre() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const echipa = [
  {
    image: test1,
    name: 'Dr. Andreea Popescu',
    role: 'Medic veterinar',
    text: '„Pentru mine, fiecare animal salvat înseamnă o victorie. La Adăpostul Speranței, nu doar tratăm, ci oferim o nouă viață și o șansă reală la fericire.”'
  },
  {
    image: test2,
    name: 'Maria Ionescu',
    role: 'Voluntar',
    text: '„Am început voluntariatul aici din dorința de a face bine. Acum, animalele pe care le ajut în fiecare zi mi-au schimbat complet perspectiva asupra empatiei și grijii.”'
  },
  {
    image: test3,
    name: 'Andrei Dobre',
    role: 'Îngrijitor',
    text: '„Legătura pe care o formezi cu aceste suflete abandonate e de nedescris. Îi văd cum evoluează și știu că ceea ce facem contează cu adevărat.”'
  }
];


  return (
    <div className="despre-page">
      <section className="despre-hero">
        <h1>🐾 Adăpostul Speranței</h1>
        <p>Ajutăm animalele fără adăpost să-și găsească o nouă șansă la viață.</p>
      </section>

      <div className="section-box">
        <section className="despre-section">
          <h2>Povestea adăpostului</h2>
          <p>
            Adăpostul Speranței s-a născut dintr-un vis simplu: să nu mai existe niciun animal
            care suferă singur pe străzi. Totul a început cu o curte modestă, câțiva saci cu hrană
            și oameni cu inima mare. Astăzi, am devenit un refugiu sigur pentru sute de animale abandonate,
            care aici își regăsesc liniștea, sănătatea și — în cele din urmă — o familie iubitoare.
          </p>
        </section>
      </div>

      <div className="section-box">
        <section className="despre-section">
          <h2>Misiune și valori</h2>
          <ul>
             <li><FiHeart /> Respect pentru fiecare viață – pentru noi, fiecare suflet contează.</li>
             <li><FiActivity /> Reabilitare și integrare responsabilă – animalele primesc tratament, îngrijire și socializare.</li>
             <li><FiHome /> Colaborare cu familii iubitoare – ne asigurăm că fiecare adopție este una responsabilă și fericită.</li>
             <li><FiBookOpen /> Educație și prevenție – organizăm ateliere, evenimente și campanii pentru a combate abandonul.</li>
           </ul>
        </section>
      </div>

      <div className="section-box">
        <section className="despre-section">
          <h2>Echipa noastră</h2>
          <p>
            Suntem o echipă unită de o misiune comună: salvarea animalelor aflate în nevoie.
            De la medici veterinari și psihologi comportamentali, până la voluntari, îngrijitori și
            personal administrativ, fiecare își aduce contribuția cu pasiune și devotament.
            Credem în puterea comunității și în forța compasiunii.
          </p>
        </section>
      </div>

      <Slider {...sliderSettings} className="echipa-carousel">
        {echipa.map((persoana, index) => (
          <div key={index} className="echipa-slide">
            <img src={persoana.image} alt={persoana.name} className="echipa-image" />
            <h3>{persoana.name}</h3>
            <h4>{persoana.role}</h4>
            <p>{persoana.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Despre;
