import React from "react";
import styles from "./Logo.css";
import MyLogo from "../../../assets/LOGO.png";

const logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={MyLogo} alt="MySpace-X" />
    </div>
  );
};

export default logo;
