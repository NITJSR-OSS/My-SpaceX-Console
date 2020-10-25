import React from "react";
import styles from "./Launches.css";
import Nav from "../UI/Navigation/Navigation";
import UpcomingLaunches from "./UpcomingLaunches/UpcomingLaunches";
import BackGround from "./BackGround/BackGround";
import PastLaunches from "./PastLaunches/PastLaunches";
import LatestLaunches from "./LatestLaunches/LatestLaunches";
import Footer from "../UI/Footer/Footer";
import MobileMenu from "../UI/Navigation/MobileMenu/MobileMenu";

const Launches = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
      <BackGround />
      <Nav />
      <UpcomingLaunches future={props.future} />
      <PastLaunches past={props.past} />
      <LatestLaunches present={props.present} />
      <Footer />
    </div>
  );
};

export default Launches;
