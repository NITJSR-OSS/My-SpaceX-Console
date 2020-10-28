import React from "react";
import styles from "./Notification.css";
import Nav from "../UI/Navigation/Navigation";
import MobileMenu from "../UI/Navigation/MobileMenu/MobileMenu";
import thumbsup from "../../assets/thumbsup.png";
import Footer from "../UI/Footer/Footer";

const Notification = (props) => {
  let objArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).match(/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i)) {
      let objkey = localStorage.key(i);
      objArray.push(localStorage.getItem(objkey));
    }
  }

  let Jsxcode = [];
  if (objArray.length === 0) {
    Jsxcode.push(
      <div className={styles.Notification} key={"nothing"}>
        <div className={styles.chat}>
          <div className={styles.profile}>
            <img src={thumbsup} alt="" />
          </div>
          <div className={styles.message}>
            <span>No New Notification..Please Mark some launches to track</span>
          </div>
        </div>
      </div>
    );
  } else {
    objArray.forEach((key) => {
      let keys = JSON.parse(key);
      Jsxcode.push(
        <div className={styles.Notification} key={keys.RocketNumber}>
          <div className={styles.chat}>
            <div className={styles.profile}>
              <img src={keys.RocketImage} alt="" />
            </div>
            <div className={styles.message}>
              <span>
                Flight Number <strong>{keys.RocketNumber}</strong>,<strong>{keys.RocketName}</strong> is next to
                Launch within <strong>{keys.RocketDays}</strong> days !!!
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
    <div className={styles.nots}>
      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.jsxcode}>{Jsxcode}</div>
    </div>
    <Footer/>
    </>
  );
};

export default Notification;
