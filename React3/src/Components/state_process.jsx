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

  const [color, setColor] = useState("green");
  const [img, setImg] = useState("nobita");
  const [text, setText] = useState("“Every flower blooms in its own time.” – Ken Petti");
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const [result, setResult] = useState(0);
  const [shape, setShape] = useState("circle");

  const changecolor = () => {
    setColor((prev) => (prev === "green" ? "red" : "green"));
  };

  const toggleimage = () => {
    setImg((prev) => (prev === "nobita" ? "shizuka" : "nobita"));
  };

  const changetext = () => {
    setText((prev) =>
      prev === "“Open the bloom of your heart and become a gift of beauty to the world.”" ? 
      "“Every flower blooms in its own time.” – Ken Petti" : 
      "“Open the bloom of your heart and become a gift of beauty to the world.”"
    );
  };

  const changeshape = () => {
    setShape((prev) => {
      if (prev === "circle") return "square";
      if (prev === "square") return "rectangle";
      if (prev === "rectangle") return "triangle";
      return "circle";
    });
  };

  const imgSrc = img === "nobita" ? sunflowerImage : tulipImage;

  return (
    
    <div style={{ textAlign: 'center' }}>
      <h1 style={{color:'blue'}}> State Management</h1>
      <h2>{flowers[currentIndex].name}</h2>
      <img
        src={flowers[currentIndex].src}
        alt={flowers[currentIndex].name}
        style={{ width: 400, height: 300, borderRadius: 12, objectFit: 'cover' }}
      />
      <div style={{ marginTop: 20 }}>
        <button onClick={prevFlower}>Previous</button>
        <button onClick={nextFlower}>Next</button>
      </div>
      
      <div style={{ padding: 20, display: "grid", gap: 20, justifyContent: "center" }}>
        <div className="maincircle" style={{ textAlign: "center" }}>
          <div
            className="circle"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: color,
              margin: "0 auto 8px",
            }}
          />
          <button className="button" onClick={changecolor}>
            {color === "green" ? "ON" : "OFF"}
          </button>
        </div>

        <div className="mainbox" style={{ textAlign: "center" }}>
          <img
            src={imgSrc}
            alt={img}
            width={220}
            height={220}
            style={{ borderRadius: 1, objectFit: "fit" }}
          />
          <br />
          <button className="button" onClick={toggleimage} style={{ marginTop: 8 }}>
            {img === "nobita" ? " Sunflower" : " Tulip"}
          </button>
        </div>

        <div className="maintext" style={{ textAlign: "center" }}>
          <div className="text">
            <h2>{text}</h2>
          </div>
          <button className="button" onClick={changetext} style={{ marginTop: 8 }}>
            Change Text
          </button>
        </div>

         <div className="mainshape" style={{ textAlign: "center" }}>
          {shape === "circle" && (
            <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#ffd54f", margin: "0 auto 8px" }} />
          )}
          {shape === "square" && (
            <div style={{ width: 120, height: 120, background: "#ffab91", margin: "0 auto 8px" }} />
          )}
          {shape === "rectangle" && (
            <div style={{ width: 160, height: 100, background: "#b39ddb", margin: "0 auto 8px" }} />
          )}
          {shape === "triangle" && (
            <div style={{ width: 0, height: 0, borderLeft: "60px solid transparent", borderRight: "60px solid transparent", borderBottom: "120px solid #a5d6a7", margin: "0 auto 8px" }} />
          )}
          <button className="button" onClick={changeshape}>
            Change Shape
          </button>
        </div>
          </div>
    </div>
  );
};

export default StateImg;
