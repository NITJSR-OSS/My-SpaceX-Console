import React from "react";
import styles from "./Navigation.css";
import Logo from "../../UI/Logo/Logo";
import { NavLink } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";

const nav = (props) => {
  return (
    <div className={styles.mainNav}>
      <Logo />
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" activeStyle={{ color: "grey" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/launches" activeStyle={{ color: "yellow" }}>
              Launches
            </NavLink>
          </li>
          <li>
            <NavLink to="/Maps" activeStyle={{ color: "yellow" }}>
              Maps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Notifications"
              className={styles.dropdown}
              activeStyle={{ color: "yellow" }}
            >
              Notifications <VscBellDot />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
