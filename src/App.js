import React, { Component } from "react";
import PreLoader from "./components/PreLoader/Preloader";
import styles from "./App.css";
import MySpaceX from "./containers/MySpaceX/MySpaceX";
import LaunchesData from './containers/LaunchesData/LaunchesData' ; 
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MapData from './containers/MapData/MapData' ;
import LaunchDetails from './components/Launches/LaunchDetails/LaunchDetails' ;

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
            {this.state.loading ? <PreLoader /> : <Route path="/" exact component={MySpaceXX} /> }
             <Route path="/launches" exact component={Launches}/>
             <Route path="/launchDetails" component={LaunchDetails}/>
             <Route path="/Maps" component={MapData}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


const Launches = () => (
  <LaunchesData/>
)
const MySpaceXX = () =>(
   <MySpaceX/>
)


export default App;
