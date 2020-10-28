import React from "react";
import styles from "./Heading.css";

const Heading = (props) => {
  return (
    <div className={styles.UpcomingLaunchesHeading}>
      <div className={styles.title}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default Heading;
