import React from "react";
import styles from "./UpcomingLaunchesHeading.css";

const UpcomingLaunchesHeading = (props) => {
  return (
    <div className={styles.UpcomingLaunchesHeading}  >
      <div className={styles.title}><span>{props.title}</span></div>
    </div>
  );
};

export default UpcomingLaunchesHeading ; 
