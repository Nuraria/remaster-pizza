import Header from "./components/Header/Header.jsx";
// import pizzas from "./assets/pizzas.json";
import React from "react";
import Home from "./components/pages/Home.jsx";
import NoteFound from "./components/pages/NoteFounde/NoteFounde.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="insaid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </div>
      </div>  
    </div>
  );
}

export default App;
