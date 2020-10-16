import React from "react";
import styles from "./Navigation.css";
import Logo from "../Logo/Logo";

const nav = () => {
  return (
    <div className={styles.mainNav}>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Launches</a>
          </li>
          <li>
            <a href="#">Launchpads</a>
          </li>
          <li>
            <a href="#">Notifications</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
