import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Maps from './Maps';
import Past_Launches from './Past_Launches';
import New_Launches from './New_Launches';
import Future_Launches from './Future_Launches';
import About from "./About";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={App}></Route>
       <Route path="/Maps" component={Maps}/>
       <Route path="/New_launches" component={New_Launches}/>
       <Route path="/Past_launches" component={Past_Launches}/>
       <Route path="/Future_launches" component={Future_Launches}/>
       <Route path="/About" component={About}/>
       <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
