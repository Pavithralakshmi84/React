import { useState } from "react";
const State=()=>{
//string
  const [moviename, setName]=useState("Alaipayuthe");
    const [hero, setHero]=useState("Madhavan");
    const [heroine, setHeroine]=useState("Shalani");
const [director, setDirector]=useState("Maniratham");
const [music_Director, setMDirector]=useState("Harris Jeyaraj");
const [Lyric, setLyric]=useState("Variramuthu");
//number

  const [days, setDays] = useState(100); 
  const [theatre, setTheatre] = useState(50);         
  const [song, setSongs] = useState(5); 
  

  //boolean

    const [isSuccess, setSuccess] = useState(true);        
  const [isHousefull, setHousefull] = useState(false);

  //array
  const [Vegetables, setVegetables] = useState([
   "Carrot","BeetRoot","LadiesFinger","Potato"
  ]);

 
  const [chocolates, setChocolates] = useState([
  "Dark chocolates","Alpino","KitKat","Temptation"
  ]);


  const [score, setScore] = useState([20, 35, 10, 5]);


  const [theaters, setTheatres] = useState([
    "Udhayam",
    "Rakki Cinemas",
    "PVR",
    "Kamala"
  ]);

  //null
  
  const [noshow, setNoshow] = useState(null);

  //object

  const [movie1, setMovie1] = useState({
    name: "Alaipayuthe",
    Hero: "Madhavan", Director:"Maniratham"
  
  });

  const [Movie2, setMovie2] = useState({
    name: "Vali",
    Heroine:"Simran", Director: "SJ SURYA"
    
  });

  const [movie3, setMovie3] = useState({
    name: "Nanban",
    Heros: " Jeeva ", Comedy:"Vadivel"
  
  });

  return (
    <>
    <center>
    <div>
      <div>
        <h2>String Rendering</h2>

        <h3>Movie Name: {moviename}</h3>
        <button onClick={() => setName("Enthiran")}>Change Name</button>
        <h3>Hero: {hero}</h3>
<button onClick={() => setHero("Rajini")}>Change Hero</button>
        <h3>Heroine: {heroine}</h3>
<button onClick={() => setHeroine("Time Aishwariya Rai")}>Change Heroine</button>
        <h3>Director: {director}</h3>
<button onClick={() => setDirector("Shankar")}>Change Director</button>
        <h3>Music Director: {music_Director}</h3>
 <button onClick={() => setMDirector("AR Rahman")}>Change Music Director </button>
        <h3>Lyricist: {Lyric}</h3>
<button onClick={() => setLyric("Vali")}>Change Lyricist</button>
        </div>
    
<div>
<h2>Number Rendering</h2>
<h3>No of Days:{days}</h3>
<button onClick={()=>setDays(age+50)}>Days Changes</button>
<h3>No of Thearters:{theatre}</h3>
<button onClick={()=>setTheatre(theatre+10)}>Theatre</button>
<h3>No of Songs: {song}</h3>
<button onClick={() => setSongs(song + 6)}>Song List</button>

</div>

<div>
    <h2>Boolean</h2>
<h3>Review: {isSuccess ? "Success" : "Flop"}</h3>
 <button onClick={() => setSuccess(!isSuccess)}> Change status</button>
        <h3>Therater Crowd: {isHousefull ? "YES" : "NO"}</h3>
        <button onClick={() => setHousefull(!isHousefull)}>Crowd</button>
</div>
<div>
<h2>Array</h2>
 <h3>Vegetable</h3>
      {Vegetables.map((g, i) => (
        <p key={i}>{g}</p>
      ))}

      <h3>Chocolates</h3>
      {chocolates.map((f, i) => (
        <p key={i}>{f}</p>
      ))}

      <h3>Scrore</h3>
      {score.map((m, i) => (
        <p key={i}> Mark {i+1}: {m}</p>
      ))}

      <h3>theater</h3>
      {theaters.map((mo,i)=>(
        <p key={i}>{mo}</p>
      ))}
</div>
      <div>
        <h2>No Show</h2>
        <h3>{noshow === null ? "No Show " : noshow}</h3>

      <button onClick={() => setNoshow("Available Timing")}>Show Timing</button>

      <button onClick={() => setNoshow(null)}> No Booking</button>
        </div>
        <div>
            <h2>Movies</h2>
            <h3>Character</h3>

      <p>Name: {movie1.name}</p>
      <p>Hero: {movie1.Hero}</p>
       <p>Director: {movie1.Director}</p>

      <h3>Movie</h3>
  
      <p> Movie: {Movie2.name}</p>
      <p>Hobby: {Movie2.Heroine}</p>
       <p>Director: {Movie2.Director}</p>

      <h3>Movies</h3>
    
      <p>Name: {movie3.name}</p>
      <p>Fav: {movie3.Comedy}</p>
            </div>
      </div>
      </center>
    </>
  );


}
export default State;