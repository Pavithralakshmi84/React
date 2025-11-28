import React, { useEffect, useState } from "react";
import Tickets from "../assets/quote.jpg";

const Quote = () => {
  const [newdatas, setNewDatas] = useState([]);

  const fetchDatas = async () => {
    try {
      const datastake = await fetch("https://dummyjson.com/quotes");
      const res = await datastake.json();
      const datas = res.quotes; // correct key from API
      setNewDatas(datas);
    } catch (err) {
      console.error("Error fetching quotes:", err);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
    <img src={Tickets} alt="Tickets" style={{ width: 300, marginTop: 20 }} />
      {newdatas.map((e) => (
        <div key={e.id}>
          <h1>
            {e.id}) {e.quote} - {e.author}
          </h1>
        </div>
      ))}

      
    </>
  );
};

export default Quote;
