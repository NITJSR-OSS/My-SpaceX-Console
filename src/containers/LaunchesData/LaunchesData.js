import React, { Component } from "react";
import axios from "axios";
import Launches from "../../components/Launches/Launches";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

class LaunchesData extends Component {
  state = {
    UpcomingLaunches: [],
    PastLaunches: [],
    isLoadedFuture: false,
    isLoadedPast: false,
    isLoadedPresent: true,
    error: false,
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
        const data = response.data;
        const updatedUpcomingLaunches = [...data];
        this.setState({
          UpcomingLaunches: updatedUpcomingLaunches,
          isLoadedFuture: true,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });

    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((response) => {
        const data = response.data;
        this.setState({
          LatestLaunches: data,
          isLoadedPresent: true,
        });
        return;
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });

    axios
      .get("https://api.spacexdata.com/v4/launches/past")
      .then((response) => {
        const data = response.data;
        const updatedPastLaunches = [...data];
        this.setState({
          PastLaunches: updatedPastLaunches,
          isLoadedPast: true,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
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
      error,
    } = this.state;
    if (error) {
      return <h1>Network Error..Please Refresh your Page</h1>;
    }
    if (isLoadedFuture && isLoadedPast && isLoadedPresent) {
      return (
        <>
          <Launches
            future={UpcomingLaunches}
            past={PastLaunches}
            present={LatestLaunches}
          />
        </>
      );
    } else {
      return <LoadingSpinner />;
    }
  }
}

export default LaunchesData;
