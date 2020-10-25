import React, { Component } from "react";
import axios from "axios";
import Homepage from "../../components/Homepage/Homepage";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

class MySpaceX extends Component {
  state = {
    infos: {},
    isLoaded: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v4/company")
      .then((response) => {
        const informs = response.data;
        const updatedInfo = {
          ...informs,
        };

        this.setState({
          infos: updatedInfo,
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const { infos, isLoaded, error } = this.state;
    if (error) {
      return <h1>Network Error...Please Refresh the Page</h1>;
    }
    if (isLoaded) {
      return (
        <Homepage
          company={infos.name}
          add={infos.summary}
          name2={infos.cto_propulsion}
          name1={infos.coo}
          reqData={infos}
        />
      );
    }
    return <LoadingSpinner />;
  }
}

export default MySpaceX;
