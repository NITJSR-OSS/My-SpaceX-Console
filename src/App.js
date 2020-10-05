import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './screens/home'
import Navbar from './components/navbar'
import Launches from './screens/launches';
import LaunchDetails from './screens/launch-detail';
import LaunchpadMap from './screens/launchpad-map';

function App() {
  return (
    <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/launch-details" component={LaunchDetails} />
        <Route exact path="/launchpad-map" component={LaunchpadMap} />

      </Switch>
    </Router>
  </React.StrictMode>
  );
}

export default App;
