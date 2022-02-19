import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <header className="App-header">Surreal Estate</header>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Routes>
    </div>
  );
}

export default App;
