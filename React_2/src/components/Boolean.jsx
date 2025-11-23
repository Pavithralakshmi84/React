import rose from "../assets/rose.jpg";
import tulip from "../assets/tulip.jpg";
import sunflower from "../assets/sunflower.jpg";
import daisy from "../assets/daisy.jpg";
import orchid from "../assets/flower.jpg";
import "../App.css";


const flowers = [
  { id: 1, name: "Rose", src: rose },
  { id: 2, name: "Tulip", src: tulip },
  { id: 3, name: "Sunflower", src: sunflower },
  { id: 4, name: "Daisy", src: daisy },
  { id: 5, name: "Orchid", src: orchid },
];

const Boolean = () => {
  const flower = {

    isBlooming: true,
  };

  return (
    <div className="flower-status">
      <h2>Flowers</h2>

      {flower.isBlooming ? (
        <div className="flowers-grid">
        {flowers.map(({ id, name, src }) => (
          <div key={id} className="flower-item">
            <img src={src} alt={name} /><br />
            <p>{name}</p>
          </div>
        ))}
      
<br />
          <h3>The flower is blooming!</h3>
        </div>
      ) : (
        <h3>The flower is not blooming.</h3>
      )}
    </div>
  );
};

export default Boolean;
