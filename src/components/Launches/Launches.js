import React from "react";
import styles from "./Launches.css";
import Logo from "../Logo/Logo";
import Header from './Header/Header' ; 
import UpcomingLaunches from './UpcomingLaunches/UpcomingLaunches' ; 
import BackGround from './BackGround/BackGround' ; 
import PastLaunches from './PastLaunches/PastLaunches' ; 
import LatestLaunches from './LatestLaunches/LatestLaunches' ;  
import Footer from '../Homepage/Footer/Footer' ; 

const Launches = (props) => {
  return (
    <div className={styles.wrapper}>
        <BackGround />
        <Logo />
        {/* <Header/> */}
        <UpcomingLaunches future={props.future}/>
        <PastLaunches past = {props.past}/>
        <LatestLaunches present = {props.present}/>
        <Footer/>
    </div>
  );
};

export default Launches;
