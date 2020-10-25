import React, { Component } from "react";
import axios from "axios";
import LaunchDetails from "../../components/Launches/LaunchDetails/LaunchDetails";

class LaunchDetailsData extends Component {
  state = {
    data: [],
    isLoaded: false,
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
      });
  }

  render() {
    const { data, isLoaded } = this.state;
    if (isLoaded) {
      return <LaunchDetails data={data} />;
    }
    return <h1>.....Loading</h1>;
  }
}

export default LaunchDetailsData;
