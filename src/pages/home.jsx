import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Vizita from './vizita';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';
import animal4 from '../assets/animal4.jpg';
import animal5 from '../assets/animal5.jpg';
import animal6 from '../assets/animal6.jpg';
import animal7 from '../assets/animal7.jpg';
import animal8 from '../assets/animal8.jpg';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-redesign">
      <div className="hero-text">
        <h1>Ajutăm animalele fără adăpost<br /> să aibă o viață decentă!</h1>
        <p>
          Fii parte din schimbare – adoptă, donează sau promovează cauza noastră.
        </p>
      </div>

      <div className="bottom-cta">
        <button onClick={() => navigate('/animale')}>
          Caută un prieten →
        </button>
      </div>

      <div className="animal-gallery">
  <div className="column">
    <img src={animal1} alt="animal" />
    <img src={animal2} alt="animal" />
  </div>
  <div className="column">
    <img src={animal3} alt="animal" />
    <img src={animal4} alt="animal" />
  </div>
  <div className="column">
    <img src={animal5} alt="animal" />
    <img src={animal6} alt="animal" />
  </div>
  <div className="column">
    <img src={animal7} alt="animal" />
    <img src={animal8} alt="animal" />
  </div>
</div>

     <div className="extra-buttons">
    <button onClick={() => navigate('/vizita')}>
      Programează o vizită →
    </button>
    <button onClick={() => navigate('/doneaza')}>
      Donează →
    </button>
  </div>

  </div>
  );
}

export default Home;
