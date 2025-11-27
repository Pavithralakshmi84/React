import React, { useEffect, useState } from "react";

const StateProcess = () => {
  const [count, setCount] = useState(0);      // how many times effect ran
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // run every 1 second
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev >= 23) {        // 0..23  => 24 times total
          clearInterval(id);     // stop interval
          return prev;
        }
        setTime(new Date());     // any side-effect work
        return prev + 1;
      });
    }, 1000);

    // cleanup if component unmounts
    return () => clearInterval(id);
  }, []); // start only once on mount

  return (
    <div style={{ padding: 20 }}>
      <h2>24× useEffect demo</h2>
      <p>Effect runs every second and stops after 24 runs.</p>
      <p>Runs so far: {count}</p>
      <p>Last time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default StateProcess;
