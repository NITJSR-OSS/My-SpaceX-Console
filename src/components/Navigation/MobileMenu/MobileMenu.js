import React from "react";
import styles from "./MobileMenu.css";
import { Link } from "react-router-dom";

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
                <Link to="/" >Home</Link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
