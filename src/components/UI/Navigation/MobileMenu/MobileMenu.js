import React from "react";
import styles from "./MobileMenu.css";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.content}>
          <div role="navigation">
            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className={styles.menu}>
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
                    to="/notifications"
                    activeStyle={{ color: "yellow" }}
                  >
                    Notifications
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
