import React, { Component } from "react";
import axios from "axios";
import Launches from "../../components/Launches/Launches";
class LaunchesData extends Component {
  state = {
    UpcomingLaunches: [],
    // LatestLaunches: [],
    PastLaunches: [],
    isLoadedFuture: false,
    isLoadedPast: false,
    isLoadedPresent: true,
  };

  data = {
    UpcomingLaunches1: [],
    LatestLaunches2: [],
    PastLaunches3: [],
  };

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v4/launches/upcoming")
      .then((response) => {
        // console.log(response);
        const data = response.data;
        const updatedUpcomingLaunches = [...data];
        this.setState({
          UpcomingLaunches: updatedUpcomingLaunches,
          isLoadedFuture: true,
        });
      });
    // console.log(this.state.UpcomingLaunches) ;
    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => {
        // console.log(response) ; 
        const data = response.data;
        this.setState({
          LatestLaunches: data,
          isLoadedPresent: true,
        });
        return ; 
      });

    axios
      .get("https://api.spacexdata.com/v4/launches/past")
      .then((response) => {
        // console.log(response);
        const data = response.data;
        const updatedPastLaunches = [...data];
        this.setState({
          PastLaunches: updatedPastLaunches,
          isLoadedPast: true,
        });
      });
  }

  render() {
    const {
      UpcomingLaunches,
      LatestLaunches,
      PastLaunches,
      isLoadedFuture,
      isLoadedPast,
      isLoadedPresent,
    } = this.state;
    if(isLoadedFuture && isLoadedPast && isLoadedPresent) {
      // console.log(this.state);
      return (
        // console.log(this.state) ;
        <Launches
          future={UpcomingLaunches}
          past={PastLaunches}
          present = {LatestLaunches}
        />
      );
    } else {
      return <div>...Loading</div>;
    }
  }
}

export default LaunchesData;
