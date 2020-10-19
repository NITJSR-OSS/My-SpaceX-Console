import React from "react";
import styles from './Logo.css' ; 
import MyLogo from '../../assets/LOGO.png' ; 
import MobileMenu from '../Navigation/MobileMenu/MobileMenu' ;

const logo = () => {

  return (
    <div className={styles.Logo}>
      <MobileMenu/>
      <img src={MyLogo} alt="MySpace-X" />
    </div>
  );
};

export default logo ; 
