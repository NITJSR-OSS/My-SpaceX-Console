import React, { Component } from "react";
import styles from "./Rockets.css";
import Rocket from "./Rocket/Rocket";

class Rockets extends Component {
  state = {
    name: this.props.name,
    time: this.props.time,
    number: this.props.number,
    image: this.props.image,
    id: this.props.id,
    isLoaded: false,
  };
  componentDidMount() {
    let flag = 1;
    let states = Object.keys(this.state);
    states.forEach((pros) => {
      if (pros.length === 0) {
        flag = 0;
      }
    });
    if (flag === 1) {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { name, time, number, image, id, isLoaded } = this.state;
    let rocket = [];
    if (isLoaded) {
      for (let i = 0; i < name.length; i++) {
        rocket.push(
          <Rocket
            name={name[i]}
            time={time[i]}
            number={number[i]}
            image={image[i]}
            timing={this.props.timing}
            id={id[i]}
            key={String(name[i]).concat(id[i])}
          />
        );
      }
    } else {
      rocket.push(<h1 key={'loading'.concat(Math.random())}>LOADING...</h1>);
    }

    return <div className={styles.rockets}>{rocket}</div>;
  }
}
export default Rockets;
