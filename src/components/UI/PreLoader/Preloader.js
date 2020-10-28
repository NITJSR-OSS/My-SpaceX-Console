import React from "react";
import styles from "./PreLoader.css";
import logo from "../../../assets/logo.svg";

const preLoader = () => {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.AppLogoContainer}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </div>
      <h1>WELCOME TO SPACE-X </h1>
    </header>
  );
};

export default preLoader;
