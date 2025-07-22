import React from 'react';
import { useNavigate } from 'react-router-dom';
import './animale.css';

import animal1 from '../assets/dog1.jpg';
import animal2 from '../assets/cat1.jpg';
import animal3 from '../assets/dog2.jpg';
import animal4 from '../assets/cat2.jpg';
import animal5 from '../assets/dog3.jpg';
import animal6 from '../assets/cat3.jpg';
import animal7 from '../assets/dog4.jpg';
import animal8 from '../assets/cat4.jpg';

const animals = [
  { id: 1, name: 'Max', specie: 'Câine', varsta: '3 ani', image: animal1 },
  { id: 2, name: 'Luna', specie: 'Pisică', varsta: '3 ani', image: animal2 },
  { id: 3, name: 'Bella', specie: 'Câine', varsta: '4 ani', image: animal3 },
  { id: 4, name: 'Milo', specie: 'Pisică', varsta: '1 an', image: animal8 },
  { id: 5, name: 'Charlie', specie: 'Câine', varsta: '6 ani', image: animal5 },
  { id: 6, name: 'Daisy', specie: 'Pisică', varsta: '3 ani', image: animal6 },
  { id: 7, name: 'Rocky', specie: 'Câine', varsta: '1 an', image: animal7 },
  { id: 8, name: 'Nala', specie: 'Pisică', varsta: '3 ani', image: animal4 },
];

function Animale() {
  const navigate = useNavigate();

  return (
    <div className="animale-container">
      <h1>Animale disponibile pentru adopție</h1>
      <p>Alege-ți un prieten și oferă-i o casă iubitoare!</p>

      <div className="animal-gallery">
        {animals.map(({ id, name, specie, varsta, image }) => (
          <div key={id} className="animal-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>

           <div className="detalii">
            <p><strong>Vârstă: </strong> {varsta}</p>
            <p><strong>Specie: </strong> {specie}</p>
          </div>

            <div className="bottommm-cta">
            <button onClick={() => navigate(`/animale/${id}`)}>
              Află mai multe →
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Animale;
