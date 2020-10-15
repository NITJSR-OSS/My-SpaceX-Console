import React, { Component } from "react";
import PreLoader from "./components/PreLoader/Preloader";
import styles from "./App.css";
// import MySpaceX from "./containers/MySpaceX/MySpaceX";
import LaunchesData from './containers/LaunchesData/LaunchesData' ; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from '../Navigation/Navigation' ;

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };

  render() {

    return (
      <Router>
        <div className={styles.App}>
          <Switch>
            {this.state.loading ? <PreLoader /> : <Route path="/" exact component={Launches} /> }
          </Switch>
        </div>
      </Router>
     
    );
  }
}


const Launches = () => (
  <LaunchesData/>
)

export default App;
