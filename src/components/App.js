import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div>
      <div className="App">
        {/* <header className="App-header">Surreal Estate</header> */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Properties />} />
          <Route exact path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// to start docker use docker-compose up in cd surreal-estate-api
