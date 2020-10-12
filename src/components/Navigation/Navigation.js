import React from "react";
import styles from "./Navigation.css";

const nav = () => {
  return (
    <div className={styles.mainNav}>
      <ul className={styles.nav}>
        <li>HOME</li>
        <li>LAUNCHES</li>
        <li>MAPS</li>
        <li>NOTIFICATIONS</li>
      </ul>
    </div>
  );
};

export default nav;
