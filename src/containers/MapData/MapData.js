import React, { Component } from "react";
import axios from "axios";
import Maps from "../../components/Maps/Maps";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

class MapData extends Component {
  state = {
    data: [],
    isLoaded: false,
    error : false,
  };

  componentDidMount() {
    axios.get("https://api.spacexdata.com/v4/landpads").then((response) => {
      const info = response.data;
      this.setState({
        data: info,
        isLoaded: true,
      });
    }).catch( error => {
         this.setState({
           error : true
         })
    })
  }

  render() {
    const { data, isLoaded ,error} = this.state;
    let longitude = [];
    let latitude = [];
    let name = [];
    if(error){
      return <h1>Network Error..Please Refresh the page</h1>
    }
    if (isLoaded) {
      data.forEach((values) => {
        longitude.push(values.longitude);
        latitude.push(values.latitude);
        name.push(values.full_name);
      });
      return <Maps lat={latitude} long={longitude} name={name} />;
    } else {
      return <LoadingSpinner />;
    }
  }
}

export default MapData;
