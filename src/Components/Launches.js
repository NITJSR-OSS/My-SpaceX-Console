import React from "react";
import Cards from "./Cards";
import "./css/Launches.css";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function LaunchDetail() {
  return (
    <div className="Launch">
      <Sidenav />
      <Navbar />
      <div className="Launches">
        <Cards
          url={"https://api.spacexdata.com/v4/launches/past"}
          heading={"Past Launches"}
        />
        <Cards
          url={"https://api.spacexdata.com/v4/launches/latest"}
          heading={"Latest Launches"}
        />
        <Cards
          url={"https://api.spacexdata.com/v4/launches/upcoming"}
          heading={"Upcoming Launches"}
        />
      </div>
    </div>
  );
}

export default LaunchDetail;
