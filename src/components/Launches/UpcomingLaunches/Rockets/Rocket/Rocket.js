import React, { useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import thumbnail1 from "../../../../../assets/thumbnail1.jpg";
import thumbnail2 from "../../../../../assets/thumnail2.jpg";
import thumbnail3 from "../../../../../assets/thumbnail3.jpg";
import { Link } from "react-router-dom";
import styles from "./Rocket.css";
import { BsHeart } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";

const Rocket = (props) => {
  let name = props.name;
  let number = props.number;
  var image = props.image;

  var currentTime = Math.round(new Date().getTime() / 1000);
  var Rockettime = props.time;
  var timeLeft = Math.abs(Rockettime - currentTime);
  var days = Math.round(timeLeft / (60 * 60 * 24));

  if (image == null) {
    let arr = [];
    arr.push(thumbnail1);
    arr.push(thumbnail2);
    arr.push(thumbnail3);
    image = arr[Math.floor(Math.random() * arr.length)];
  }

  let initstate = false;
  if (localStorage.getItem("rocket".concat(number))) {
    initstate = true;
  }
  const [trackBtn, updatetrackBtn] = useState(initstate);

  if (trackBtn) {
    let obj = {
      RocketName: name,
      RocketNumber: number,
      RocketDays: days,
      RocketImage: image,
    };

    obj = JSON.stringify(obj);
    if (
      !localStorage.getItem("rocket".concat(number)) ||
      JSON.parse(localStorage.getItem("rocket".concat(number))).length === 0
    ) {
      localStorage.setItem("rocket".concat(number), obj);
    }
  } else {
    localStorage.removeItem("rocket".concat(number));
  }

  let present = false;
  if (localStorage.getItem("rocket".concat(number))) {
    present = true;
  }

  return (
    <>
      <div>
        <Link to="/launchDetails" className={styles.links}>
          <div className={styles.rocket}>
            <img
              className={styles.image}
              src={image}
              alt={image}
              onClick={() => {
                reactLocalStorage.set("count", props.id);
              }}
            />
            <p
              className={styles.name}
              onClick={() => {
                reactLocalStorage.set("count", props.id);
              }}
            >
              {name}
            </p>
            <p
              className={styles.number}
              onClick={() => {
                reactLocalStorage.set("count", props.id);
              }}
            >
              {number}
            </p>
            <p className={styles.days}>
              {days} days {props.timing}
            </p>
          </div>
        </Link>
        <div
          className={styles.trackIcon}
          onClick={() => updatetrackBtn(!trackBtn)}
        >
          {trackBtn && present ? <BsFillHeartFill /> : <BsHeart />}
        </div>
      </div>
    </>
  );
};

export default Rocket;
