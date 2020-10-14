import React from "react";
import "./css/Home.css";
import Earth from "../assets/earth.png";
import MyComponent from "./Typed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./css/App.css";
import LaunchDetail from "./LaunchDetail";
import Launches from "./Launches";
import Launchpad from "./Launchpad";
import Sidebar from "./Sidenav";

import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Home() {
  return (
    <div className="home">
      <Sidenav />
      <Navbar />
      <div className="para">
        {" "}
        <h1>About us</h1>
        <MyComponent />
        <a href="https://en.wikipedia.org/wiki/SpaceX" target="_blank">
          <button className="btn_km">Know more</button>
        </a>
      </div>
      <img src={Earth} className="earth" />
    </div>
  );
}

export default Home;
