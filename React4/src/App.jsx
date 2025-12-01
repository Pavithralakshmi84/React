import Dashboard from "../src/Pages/Dashboard";
import Login from "../src/Pages/Login.jsx";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <h1 className="bg-black text-3xl text-white text-center p-2">
          Login Process
        </h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </main>
    </>
  );
};

export default App;