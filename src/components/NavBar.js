import React from "react";
import "../styles/NavBar.css";
// import logo from "../images/logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <img
          className="navbar-logo"
          alt="surreal estate"
          src="../images/logo.png"
        />
        <p className="navbar-links-item">View Properties</p>
        <p className="navbar-links-item">Add a Property</p>
      </ul>
    </div>
  );
}
