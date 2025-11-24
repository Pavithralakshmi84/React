import { useState } from 'react';

import roseImage from '../assets/rose.jpg';
import tulipImage from '../assets/tulip.jpg';
import sunflowerImage from '../assets/Sunflower.jpg';
import orchidImage from '../assets/flower.jpg';

const flowers = [
  { name: 'Rose', src: roseImage },
  { name: 'Tulip', src: tulipImage },
  { name: 'Sunflower', src: sunflowerImage },
  { name: 'Orchid', src: orchidImage },
];

const StateImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlower = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flowers.length);
  };

  const prevFlower = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flowers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{flowers[currentIndex].name}</h2>
      <img
        src={flowers[currentIndex].src}
        alt={flowers[currentIndex].name}
        style={{ width: 300, height: 300, borderRadius: 12, objectFit: 'cover' }}
      />
      <div style={{ marginTop: 20 }}>
        <button onClick={prevFlower}>Previous</button>
        <button onClick={nextFlower}>Next</button>
      </div>
    </div>
  );
};

export default StateImg;
