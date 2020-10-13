import React from "react";
import styles from "./Footer.css";
import Logo from "../../../assets/LOGO.png";

const footer = (props) => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <img src={Logo} alt="logo" />
        <p className={styles.footerLinks}>
          <a href="#">Home</a>·<a href="#">Launches</a>·<a href="#">Maps</a>·
        </p>

        <p className={styles.footerCompanyName}>SpaceX © 2002</p>

        <div className={styles.footerIcons}>
          <a href="#" className={styles.facebook}>
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" className={styles.twitter}>
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" className={styles.linkedin}>
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#" className={styles.dribbble}>
            <i class="fa fa-dribbble"></i>
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
