import React from "react";
import styles from "./OwnerName.css";

const ownernName = (props) => {
  return (
    <div className={styles.OwnerName}>
      <div className={styles.name}>
        <p className={styles.Elon}>Elon </p>
        <p className={styles.Musk}>Musk</p>
      </div>
      <div className={styles.who}>
        <p>CEO & Founder</p>
      </div>
    </div>
  );
};

export default ownernName;
