const Child = ({
  sendmoviename,
  hero,
  heroine,
  sendarray,
  sendobject,
  sendlist,
}) => {
  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Movie: {sendmoviename}</h2>

      <h2>
        Actor: {hero} | Actress: {heroine}
      </h2>
      <p>
        Hero: <strong>{hero}</strong> | Heroine: <strong>{heroine}</strong>
      </p>

      <h3>Songs</h3>
      <p>
        {sendarray.map((song, index) => (
          <span key={index}>
            {index + 1}. {song}
            <br />
          </span>
        ))}
      </p>

      <h3>Director</h3>
      <p>Music: {sendobject.Music}</p>
      <p>Director: {sendobject.Movie}</p>

      <h3>Singers & Dancers</h3>
      <p>
        {sendlist.map((item) => (
          <span key={item.id}>
            Singer: {item.singer} | Dancer: {item.dancer}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default Child;
