import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.css';
import Home from './screens/home'
import Navbar from './components/navbar'
import Launches from './screens/launches';
import LaunchDetails from './screens/launch-detail';
import LaunchpadMap from './screens/launchpad-map';
import Particles from 'react-particles-js';

function App() {
  return (
    <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route exact path="/launches" component={Launches} />
       
        <Route exact path="/launchpad-map" component={LaunchpadMap} />
        <Route path='/launches/:id' component={LaunchDetails}/>

      </Switch>
      
    </Router>
    <div className="par-background"><Particles 
        height={window.outerHeight}
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
      }}
      /> 
       </div>
    
  </React.StrictMode>
  );
}

export default App;
