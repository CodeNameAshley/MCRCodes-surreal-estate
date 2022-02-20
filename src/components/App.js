import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import houses from "../images/acnh-surreal-estate.jpg";

function App() {
  return (
    <div>
      <div className="App">
        {/* <header className="App-header">Surreal Estate</header> */}
        <NavBar />
        <img className="surreal-estate-image" src={houses} alt="House" />
        <Routes>
          <Route exact path="/" element={<Properties />} />
          <Route exact path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
