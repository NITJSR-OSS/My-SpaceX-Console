import React from "react";
import './index.css';
import './App.css';
import Maps from "./Maps";
import New_Launches from "./New_Launches";
import Past_Launches from "./Past_Launches";
import Future_Launches from "./Future_Launches";
import About from "./About";
import { NavLink } from "react-router-dom";



const Navbar=()=>{
    return (
        <>
        <div className="navbar">
<div className="logo"><NavLink to="/#">Space X</NavLink></div>
  <div className="dropdown">
    <button className="dropbtn">Launches</button>
    <div className="dropdown-content">
      <NavLink to="/New_Launches">New Launches</NavLink>
      <NavLink to="/Past_Launches">Past Launches</NavLink>
      <NavLink to="/Future_Launches">Future Launches</NavLink>
    </div>
  </div> 
      <NavLink  to="/Maps">Maps</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/">Home</NavLink>
</div>
        </>
    );
}

export default Navbar;