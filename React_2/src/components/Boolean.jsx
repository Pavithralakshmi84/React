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
  const showTitle = true;

  return (
    <div className="boolean-container">
      {showTitle && <h2>Beautiful Flowers</h2>}

      <div className="flowers-grid">
        {flowers.map(({ id, name, src }) => (
          <div key={id} className="flower-item">
            <img src={src} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>

      {!showTitle && <p className="no-flowers-message">No flowers to show right now.</p>}
    </div>
  );
};

export default Boolean;
