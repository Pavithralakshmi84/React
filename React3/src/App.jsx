import Cards from "./Components/cards";
import Banner from "./Components/Banner.jsx"
import Navbar from "./Components/Navbar.jsx";
import State from "./Components/state.jsx";
import StateImg from "./Components/state_process.jsx";

import {Routes,Route } from 'react-router-dom';

const App = () => {
  return (
     <>
         <Navbar />
      <Routes>
        <Route path="/banner" element={<Banner />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/state" element={<State/>}/>
        <Route path="/state1" element={<StateImg/>}/>
           </Routes>
 </>
  );
};

export default App;
