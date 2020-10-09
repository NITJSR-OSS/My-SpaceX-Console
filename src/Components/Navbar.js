import React from "react";
import "./css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} className="logo" />
      <ul className="nav-links">
        <Link to="/landing">
          <li>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/launches">
          <li>
            <p>Launches</p>
          </li>
        </Link>
        <Link to="/launchdetail">
          <li>
            <p>Launch Details</p>
          </li>
        </Link>
        <Link to="/launchpad">
          <li>
            <p>LaunchPad</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
