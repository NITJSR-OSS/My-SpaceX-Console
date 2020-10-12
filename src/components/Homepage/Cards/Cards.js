import React from "react";
import styles from "./Cards.css";


const cards = (props) => {
  let str = (props.post) ; 
  return (
      <div className={styles.cardContainer}>
        <img className={styles.round} src={props.pic} alt="user1" />
        <h2 className={styles.name}>{props.name}</h2>
        <h4 className={styles.cfo}>{str}</h4>
      </div>
  );
};

export default cards;
