import React,{useState,useEffect} from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import thumbnail1 from "../../../../../assets/thumbnail1.jpg";
import thumbnail2 from "../../../../../assets/thumnail2.jpg";
import thumbnail3 from "../../../../../assets/thumbnail3.jpg";
import { Link } from "react-router-dom";
import styles from "./Rocket.css";
// import LaunchDetailsData from "../../../../../containers/LaunchesData/LaunchDetailsData";

const Rocket = (props) => {
  var d = new Date();
  var currentTime = d.getUTCMilliseconds();
  var Rockettime = props.time;
  var timeLeft = Math.abs(Rockettime - currentTime);
  var days = Math.round(timeLeft / (1000 * 60 * 60 * 24));
  // let rocketID = [];
  
  // const [count, setCount] = useState(0); 

  // const renderedData = () => {
  //    localStorage.setItem('count',count) ; 
  // }

  // useEffect(() =>     
  //      < LaunchDetailsData id={count} />
  //   );
  

  var image = props.image;
  if (image == null) {
    let arr = [];
    arr.push(thumbnail1);
    arr.push(thumbnail2);
    arr.push(thumbnail3);
    image = arr[Math.floor(Math.random() * arr.length)];
  }
  return (
   <div>
    <Link to="/launchDetails" className={styles.links} >
      <div className={styles.rocket}  onClick={() => {reactLocalStorage.set('count', props.id)} }>
        <img className={styles.image} src={image} alt={image} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.number}>{props.number}</p>
        <p className={styles.days}>
          {days} days {props.timing}
        </p>
      </div>
    </Link>
  </div>  
  );
};

export default Rocket;
