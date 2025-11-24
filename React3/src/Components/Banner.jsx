import React from "react";
import '../App.css';
import nayagan from '../assets/Nayagan.jpg';
import alaipayutheyPoster from '../assets/Alaipayuthe.jpg';
import Mounaragam from '../assets/MR.jpg';
import okok from '../assets/okok.jpg';

const Banner = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const images = [nayagan, alaipayutheyPoster, Mounaragam, okok];

  return (
    <div className="banner-container">
      <h1 className="banner-title">Maniratham Movies</h1>
      <div className="images-container">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Movie Poster ${idx + 1}`}
            className="banner-image"
            style={hoverIndex === idx ? { transform: 'scale(1.05)' } : {}}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
