import Cards from "./Components/cards";
import Banner from "./Components/Banner.jsx"
import Navbar from "./Components/Navbar.jsx";
import State from "./Components/state.jsx";
import StateProcess from "./Components/state_process.jsx";
import Fibanocci from "./Components/fibanocci.jsx";
import Quote from "./Components/use_effect.jsx";
import One from "./Components/useeffect.jsx";

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/banner" element={<Banner />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/state" element={<State />} />
        <Route path="/fibo" element={<Fibanocci />} />
        <Route path="/state1" element={<StateProcess />} />
           <Route path="/quote" element={<Quote />} />
        <Route path="/useEffect1" element={<One />} />
      </Routes>
    </>
  );
};

export default App;
