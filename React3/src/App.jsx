import Cards from "./Components/cards";
import Banner from "./Components/Banner.jsx"
import Navbar from "./Components/Navbar.jsx";
import State from "./Components/state.jsx";
import StateProcess from "./Components/state_process.jsx";
import Fibanocci from "./Components/fibanocci.jsx";
import Quote from "./Components/use_effect.jsx"
import Properties from "./Components/properties.jsx";
import Showdetails from "./Components/show_details.jsx"
import { Routes, Route } from 'react-router-dom';
import Formhandling from "./Components/form_handling.jsx";
import Form from "./Components/form.jsx";

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
         <Route path="/quote" element={<Quote/>} />
        <Route path="/prop" element={<Properties/>} />
        <Route path="/show" element={<Showdetails/>} />
         <Route path="/form" element={<Formhandling/>} />
          <Route path="/form1" element={<Form/>} />
      </Routes>
    </>
  );
};

export default App;
