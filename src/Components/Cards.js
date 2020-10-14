import React, { Component } from "react";
import "./css/cards.css";
import axios from "axios";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(this.props.url)
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
      <div className="cards-container">
        <div className="heading">
          {" "}
          <h4>{this.props.heading}</h4>
        </div>
        {posts.length
          ? posts.map((post) => (
              <div key={post.serial} className="list">
                {" "}
                <img src={post.links.patch.small} className="launches_img" />
                <p>{post.success}</p>
                <p>{post.details}</p>
                <p>{Date(post.static_fire_date_utc)}</p>
                <hr />
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Cards;
