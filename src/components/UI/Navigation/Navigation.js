import React from "react";
import styles from "./Navigation.css";
import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";

const nav = (props) => {
  return (
    <div className={styles.mainNav}>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
          <li>
            <Link to="/Maps">Maps</Link>
          </li>
          <li>
            <Link to="/Notifications" className={styles.dropdown}>
              Notifications <VscBellDot />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
