import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import houses from "../images/acnh-surreal-estate.jpeg";

function App() {
  return (
    <div>
      <div className="App">
        {/* <header className="App-header">Surreal Estate</header> */}
        <NavBar />
        <Routes>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Routes>
      </div>
      <img className="surreal-estate-image" src={houses} alt="House" />
    </div>
  );
}

export default App;
