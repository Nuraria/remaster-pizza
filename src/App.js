import Header from "./components/Header/Header.jsx";
// import pizzas from "./assets/pizzas.json";
import React from "react";
import Home from "./components/pages/Home.jsx";
import NoteFound from "./components/pages/NoteFounde/NoteFounde.jsx";
import { Routes, Route } from "react-router-dom";

export const AppContext = React.createContext();
function App() {
  const [valueText, setValueText] = React.useState("");

  return (
    <div className="wrapper">
      <AppContext.Provider value={{valueText, setValueText}}>
        <div className="content">
          <Header />
          <div className="insaid">
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route path="*" element={<NoteFound />} />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
