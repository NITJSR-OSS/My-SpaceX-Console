import React from "react";
import styles from "./Cores.css";

const Cores = (props) => {
  let data = props.data.cores;
  let flight = data.flight;
  let gridfins = data.gridfins ? "Yes" : "No";
  let legs = data.legs ? "Yes" : "No";
  let reused = data.reused ? "Yes" : "No";
  let landing_attempt = data.landing_attempt ? "Yes" : "No";
  let landing_success = data.landing_success ? "Yes" : "No";
  let landing_type = data.landing_type ? "Yes" : "No";

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.key}>Flight</div>
      <div>{flight}</div>
      <div className={styles.key}>Gridfins</div>
      <div>{gridfins}</div>
      <div className={styles.key}>Legs</div>
      <div>{legs}</div>
      <div className={styles.key}>Reused</div>
      <div>{reused}</div>
      <div className={styles.key}>landing_attempt</div>
      <div>{landing_attempt}</div>
      <div className={styles.key}>landing_success</div>
      <div>{landing_success}</div>
      <div className={styles.key}>landing_type</div>
      <div>{landing_type}</div>
    </div>
  );
};

export default Cores;
