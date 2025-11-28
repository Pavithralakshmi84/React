import { useEffect, useState } from "react";
import img from "../assets/quote.jpg";


const Quote = () => {

    const [info,setInfo] = useState([
      { quote: "...", author: "..." },
    
       
    ])

    useEffect (()=>{
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => setInfo(data.quotes))
        .catch(error => console.error(error))
    },[])
    
    return (
        <>
        <img src={img} alt="Tickets" style={{ width: 200, height: 150, marginTop: 20 }} />
        <h2>
            {info.map((e,i)=>(
                <p key={i}>
                    {e.quote} <br />
                    {e.author}
                </p>
            ))}
        </h2>
        </>
    )
}
export default Quote;