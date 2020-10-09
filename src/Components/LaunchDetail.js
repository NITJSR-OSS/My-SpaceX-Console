import React, { Component } from "react";
import "./css/LaunchDetails.css";
import axios from "axios";
import Modal_Detail from "./Modal_Detail";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";

class LaunchDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="launchdetail">
        <Sidenav />
        <Navbar />
        {posts.length
          ? posts.map((post) => (
              <div key={post.serial} className="lists">
                {" "}
                <div className="info">
                  <h1>{post.name}</h1>
                  <img src={post.links.patch.small} />
                </div>
                <div className="box_info">
                  <b>
                    <h2>{post.details}</h2>
                  </b>
                  <br />
                  <p>{post.static_fire_date_utc}</p>
                  <br />
                  <br />

                  <Modal_Detail
                    src={post.links.patch.small}
                    detail={post.details}
                    name={post.name}
                    full={post.links.article}
                  />
                </div>
                <hr />
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default LaunchDetails;
