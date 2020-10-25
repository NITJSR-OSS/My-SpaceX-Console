import React, { Component } from "react";
import axios from "axios";
import Homepage from "../../components/Homepage/Homepage";

class MySpaceX extends Component {
  state = {
    infos: {},
  };

  componentDidMount() {
    axios.get("https://api.spacexdata.com/v4/company").then((response) => {
      const informs = response.data;
      const updatedInfo = {
        ...informs,
      };

      this.setState({
        infos: updatedInfo,
      });
    });
  }

  render() {
    return (
      <Homepage
        company={this.state.infos.name}
        add={this.state.infos.summary}
        name2={this.state.infos.cto_propulsion}
        name1={this.state.infos.coo}
        reqData={this.state.infos}
      />
    );
  }
}

export default MySpaceX;
