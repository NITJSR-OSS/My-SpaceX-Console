import React from "react";
import styles from "./Footer.css";
import Logo from "../../../assets/LOGO.png";
import { CgWebsite } from "react-icons/cg";
import { ImFlickr4 } from "react-icons/im";
import { NavLink } from "react-router-dom";

const footer = (props) => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <img src={Logo} alt="logo" />
        <p className={styles.footerLinks}>
          <NavLink to="/" activeStyle={{ color: "grey" }}>
            <span>Home</span>
          </NavLink>
          ·
          <NavLink to="/launches" activeStyle={{ color: "yellow" }}>
            <span>Launches</span>
          </NavLink>
          ·
          <NavLink to="/Maps" activeStyle={{ color: "yellow" }}>
            <span>Maps</span>
          </NavLink>
        </p>

        <p className={styles.footerCompanyName}>SpaceX © 2002</p>

        <div className={styles.footerIcons}>
          <a href="https://www.spacex.com/" className={styles.website}>
            <i>
              <CgWebsite />
            </i>
          </a>
          <a href="https://twitter.com/SpaceX" className={styles.twitter}>
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.flickr.com/photos/spacex/"
            className={styles.flickr}
          >
            <i>
              <ImFlickr4 />
            </i>
          </a>
        </div>
      </div>

      <div className={styles.footerRight}>
        <p>Headquaters</p>
        <div className={styles.address}>
          <div className={styles.addressLine}>
            <p className={styles.type}>address:</p>
            <p>Rocket Road</p>
          </div>
          <div className={styles.addressLine}>
            <p className={styles.type}>city:</p>
            <p>Hawthorne</p>
          </div>
          <div className={styles.addressLine}>
            <p className={styles.type}>state:</p>
            <p>California</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
