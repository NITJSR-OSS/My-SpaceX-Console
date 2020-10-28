import React, { Component } from "react";
import axios from "axios";
import LaunchDetails from "../../components/Launches/LaunchDetails/LaunchDetails";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

class LaunchDetailsData extends Component {
  state = {
    data: [],
    isLoaded: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.spacexdata.com/v4/launches/" +
          localStorage.getItem("count")
      )
      .then((response) => {
        const info = response.data;
        this.setState({
          data: info,
          isLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const { data, isLoaded, error } = this.state;
    if (error) {
      return <h1>Network Error..Please refresh your page</h1>;
    } else if (isLoaded) {
      return <LaunchDetails data={data} />;
    }
    return <LoadingSpinner />;
  }
}

export default LaunchDetailsData;
