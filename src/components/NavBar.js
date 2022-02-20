import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>

        <img className="navbar-logo" alt="surreal estate" src={logo} />
        <Link className="navbar-links-item" to="/add-property">
          Add a Property
        </Link>
      </ul>
    </div>
  );
}
