import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './screens/homeScreen/Home';
import Launch from './screens/launchScreen/Launch';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar/>
        <div className='app-body'>
          <Switch>
            <Route path='/launch' exact component={Launch}/>
            <Route path="/home"component={Home}></Route>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
