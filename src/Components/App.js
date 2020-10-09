import React from "react";
import "./css/App.css";
import logo from "../assets/logo.png";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LaunchDetails from "./LaunchDetail";
import Launchpad from "./Launchpad";
import Launches from "./Launches";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
// import Landing from "./Landing";

function App() {
  return (
    <Router>
      {/* <Sidenav />
      <Navbar className="nav" /> */}
      <div className="App">
        <Switch>
          <Route path="/" exact component={Display} />
          <Route path="/landing" component={Home} />
          {/* <Route path="/landing" component={Landing}></Route> */}
          <Route path="/launches" component={Launches}></Route>
          <Route path="/launchpad" component={Launchpad}></Route>
          <Route path="/launchdetail" component={LaunchDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const Display = () => {
  return (
    <div className="landing">
      <div className="header">
        <img className="logo" src={logo} className="landing_logo" />
        <span> </span>
      </div>

      <div className="button">
        <Link to="/landing">
          <button className="btn btn-light">&#x25B6;</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
