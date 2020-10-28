import React from "react";
import styles from "./Cards.css";
import thumbnail from '../../../assets/thumbnail1.jpg' ; 

const cards = (props) => {
  let image = props.pic ; 
  if(image==null){
    image = thumbnail ; 
  }
  let str = (props.post) ; 
  return (
      <div className={styles.cardContainer}>
        <img className={styles.round} src={image} alt="user1" />
        <h2 className={styles.name}>{props.name}</h2>
        <h4 className={styles.cfo}>{str}</h4>
      </div>
  );
};

export default cards;
