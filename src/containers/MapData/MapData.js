import React, { Component } from "react";
import axios from "axios";
import Maps from "../../components/Maps/Maps";

class MapData extends Component {
  state = {
    data: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios.get("https://api.spacexdata.com/v4/landpads").then((response) => {
      const info = response.data;
      this.setState({
        data: info,
        isLoaded: true,
      });
    });
  }

  render() {
    const { data, isLoaded } = this.state;
    let longitude = [];
    let latitude = [];
    let name = [];
    if (isLoaded) {
      data.forEach((values) => {
        longitude.push(values.longitude);
        latitude.push(values.latitude);
        name.push(values.full_name);
      });
      return <Maps lat={latitude} long={longitude} name={name} />;
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default MapData;
