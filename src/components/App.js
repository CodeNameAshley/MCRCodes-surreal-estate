import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Footer from "./Footer";

function App() {
  return (
    <div className="background-image">
      <div className="App">
        <header className="App-header">Surreal Estate</header>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Properties />} />
            <Route exact path="/add-property" element={<AddProperty />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

// to start docker use docker-compose up in cd surreal-estate-api
