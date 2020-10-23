import React from "react";
import styles from "./Notification.css";
import Nav from "../Navigation/Navigation";
import MobileMenu from "../Navigation/MobileMenu/MobileMenu";
import thumbsup from '../../assets/thumbsup.png' ; 

const Notification = (props) => {
  let obj = localStorage.getItem("rocket");
  obj = JSON.parse(obj);
  let dropDownContent = [];
  let image = thumbsup ; 
  if (obj) {
    let number = obj.RocketNumber;
    let name = obj.RocketName;
    let days = obj.RocketDays;
    image = obj.RocketImage ; 
    console.log(number, name);
    dropDownContent.push(
    <span>Flight Number {number},{name} is next to Launch within {days} days !!!</span>
    );
  } else {
    dropDownContent.push(<span>No New Notification</span>);
  }

  return (
   <div className={styles.nots}>
     <div className={styles.mobileMenu}><MobileMenu /></div>
     <div className={styles.nav}><Nav /></div>
    <div className={styles.Notification}>
      <div className={styles.chat}>
        <div className={styles.profile}>
          <img
            src={image}
            alt=""
          />
        </div>
        <div className={styles.message}>
          {dropDownContent}
        </div>
      </div>
      </div>
    </div>   
  );
};

export default Notification;
