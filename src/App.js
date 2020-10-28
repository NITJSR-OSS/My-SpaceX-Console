import React, { Component } from "react";
import PreLoader from "./components/UI/PreLoader/Preloader";
import styles from "./App.css";
import MySpaceX from "./containers/MySpaceX/MySpaceX";
import LaunchesData from './containers/LaunchesData/LaunchesData' ; 
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MapData from './containers/MapData/MapData' ;
import LaunchDetailsData from './containers/LaunchesData/LaunchDetailsData' ;
import Notification from './components/Notification/Notification' ; 
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
             <Route path="/launchDetails" component={LaunchDetailsData}/>
             <Route path="/Maps" component={MapData}/>
             <Route path="/Notifications" component={Notification} />
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
