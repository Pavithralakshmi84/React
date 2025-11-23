import MovieImg from '../assets/Alaipayuthe.jpg';

const String = ()=>{
  const moviename = "Alaipayuthey ";
  const year = 2000;
  const music= "A. R.Rahman";  const lyric="Vairamuthu";

  const SongLyrics= "Pachai niramae Ichchai moottum pachai niramae Pullin sirippum pachai niramae Enakku sammadham tharumae... Sagiyae snegidhiyae Kaadhalil kaadhalil Kaadhalil niramundu  En anbae anbae Unakkum niramundu... Kilaiyil kaanum Kiliyin mookku Vidalai pennin Vetrilai naakku Puththam pudhidhaai Raththa rojaa... Bhoomi thodaadha Pillaiyin paadham... Ella sivappum undhan kovam Ella sivappum undhan kovam";


  const Aboutmovie = "Karthik and Shakthi fall in love and marry secretly against their families' wishes. They soon discover that married life is full of unexpected challenges, testing their love and relationship.";

  return(
    <>
      <div className="movie">
        <div className="Lyrics">
          <h1> Movie Name: {moviename} </h1>
          <h2><br /> YEAR: {year} <br /> MUSIC: {music} <br /> Lyrics: {lyric} </h2><br />
          <p>{SongLyrics}</p><br />
          <img src={MovieImg} alt="flower blooming" style={{ width: '150px', height: 'auto' }} />
        </div>
      </div>

      <div className="movie">
        <div className="Lyrics">
          <h1>{moviename} Story </h1>
          <p>{Aboutmovie}</p>
        </div>
      </div>
    </>
  );    
};
export default String;