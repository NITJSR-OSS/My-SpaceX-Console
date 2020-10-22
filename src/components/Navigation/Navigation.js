import React from "react";
import styles from "./Navigation.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const nav = (props) => {

  return (
    <div className={styles.mainNav}>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" ><span>Home</span></Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
          <li>
            <Link to="/Maps">Maps</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
