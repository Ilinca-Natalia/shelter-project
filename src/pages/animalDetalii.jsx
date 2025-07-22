import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animal1 from '../assets/dog1.jpg';
import animal2 from '../assets/cat1.jpg';
import animal3 from '../assets/dog2.jpg';
import animal4 from '../assets/cat2.jpg';
import animal5 from '../assets/dog3.jpg';
import animal6 from '../assets/cat3.jpg';
import animal7 from '../assets/dog4.jpg';
import animal8 from '../assets/cat4.jpg';
import './animalDetalii.css';


const animaleDetalii = [
  {
    id: 1,
    nume: 'MAX',
    dataNasterii: '15.03.2022',
    inaltime: '60 cm',
    greutate: '25 kg',
    gen: 'M',
    rasa: 'Ciobănesc German Mix',
    talie: 'Mare',
    vaccinata: 'Da',
    poveste: `🐾 Max a fost salvat de pe marginea unui drum aglomerat, unde a stat mai multe zile așteptând, poate, pe cineva care nu s-a mai întors. 
Deși viața nu a fost blândă cu el, Max a rămas un câine blajin și devotat. În prezent, se află la adăpostul nostru și
așteaptă o familie care să-l accepte așa cum este – afectuos, protector și dornic să ofere dragoste necondiționată.
Este un câine de talie mare, perfect pentru curte, dar și pentru plimbări lungi alături de un stăpân activ.`,    
    imagine: animal1,
  },
  {
    id: 2,
    nume: 'LUNA',
    dataNasterii: '10.07.2022',
    inaltime: '30 cm',
    greutate: '4.5 kg',
    gen: 'F',
    rasa: 'Pisică Europeană',
    talie: 'Mică',
    vaccinata: 'Da',
    poveste: `🌙 Luna este o pisicuță curioasă și jucăușă care adoră liniștea. A fost găsită într-o zonă rurală și adusă 
    la adăpost. Se acomodează rapid într-un cămin iubitor și are nevoie de puțină atenție și afecțiune.`,
    imagine: animal2,
  },
  {
    id: 3,
    nume: 'BELLA',
    dataNasterii: '01.01.2021',
    inaltime: '55 cm',
    greutate: '22 kg',
    gen: 'F',
    rasa: 'Golden Retriever',
    talie: 'Mare',
    vaccinata: 'Da',
    poveste: `💛 Bella este o cățelușă blândă și afectuoasă. Se înțelege bine cu alți câini și este ideală pentru 
    familiile cu copii. Are nevoie de un cămin cald unde să-și petreacă zilele jucându-se și primind iubire.`,
    imagine: animal3,
  },
  {
    id: 4,
    nume: 'MILO',
    dataNasterii: '15.04.2024',
    inaltime: '28 cm',
    greutate: '3.8 kg',
    gen: 'M',
    rasa: 'Pisică Siameză',
    talie: 'Mică',
    vaccinata: 'Da',
    poveste: `😺 Milo este un pisoi vocal și energic, cu multă personalitate. Caută un om al lui care să-i ofere atenție, 
    joc și multă iubire. Ideal pentru un cămin unde nu se plictisește.`,
    imagine: animal8,
  },
  {
    id: 5,
    nume: 'CHARLIE',
    dataNasterii: '03.06.2019',
    inaltime: '25 cm',
    greutate: '7.5 kg',
    gen: 'M',
    rasa: 'Mixta',
    talie: 'Medie',
    vaccinata: 'Da',
    poveste: `🎾 Charlie este un cățel vesel și curios, plin de energie. Adoră plimbările și compania oamenilor. 
    Este perfect pentru o familie activă care vrea un partener de joacă și aventură.`,
    imagine: animal5,
  },
  {
    id: 6,
    nume: 'DAISY',
    dataNasterii: '20.02.2022',
    inaltime: '32 cm',
    greutate: '6 kg',
    gen: 'F',
    rasa: 'Pisică Persană',
    talie: 'Mică',
    vaccinata: 'Da',
    poveste: `🌸 Daisy este o pisicuță calmă și elegantă, care iubește să fie mângâiată. Este ideală pentru cineva care 
    își dorește o prezență blândă și liniștită în casă.`,
    imagine: animal6,
  },
  {
    id: 7,
    nume: 'ROCKY',
    dataNasterii: '08.09.2024',
    inaltime: '20 cm',
    greutate: '6 kg',
    gen: 'M',
    rasa: 'Boxer',
    talie: 'Mare',
    vaccinata: 'Da',
    poveste: `🥊 Rocky este un câine puternic și jucăuș, cu o inimă mare. Este loial, energic și iubește activitățile 
    în aer liber. Are nevoie de o familie activă și prezentă.`,
    imagine: animal7,
  },
  {
    id: 8,
    nume: 'NALA',
    dataNasterii: '25.12.2022',
    inaltime: '34 cm',
    greutate: '5.5 kg',
    gen: 'F',
    rasa: 'Pisică Maine Coon',
    talie: 'Medie',
    vaccinata: 'Da',
    poveste: `💚 Nala este sociabilă, calmă și se înțelege bine cu alte animale. Este o pisică deosebit de frumoasă și 
    afectuoasă care caută un loc unde să se simtă în siguranță.`,
    imagine: animal4,
  },
];

function AnimalDetalii() {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = animaleDetalii.find((a) => a.id === Number(id));

  if (!animal) {
    return <p>Animalul nu a fost găsit.</p>;
  }

  return (
  <div className="animal-detalii-container">
    <h1>{animal.nume}</h1>
    <div className="animal-flex">
      <div className="animal-image-container">
        <img src={animal.imagine} alt={animal.nume} className="animal-image" />

        <div className="bottom-cta">
        <button onClick={() => navigate('/adopta')}>
          Adoptă acest animal →
        </button>
      </div>
     </div>
      <div className="animal-info">
        <p>{animal.poveste}</p>
        <div className="animal-detalii-info">
          <p><strong>Data nașterii: </strong> {animal.dataNasterii}</p>
          <p><strong>Înălțime: </strong> {animal.inaltime}</p>
          <p><strong>Greutate: </strong> {animal.greutate}</p>
          <p><strong>Gen: </strong> {animal.gen}</p>
          <p><strong>Rasă: </strong> {animal.rasa}</p>
          <p><strong>Talie: </strong> {animal.talie}</p>
          <p><strong>Sterilizare: </strong> {animal.vaccinata}</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default AnimalDetalii;
