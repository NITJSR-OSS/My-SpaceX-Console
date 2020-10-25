import React from "react";
import styles from "./keys.css";

const Keys = (props) => {
  let obj = props.reqData;
  let key = obj.id;
  delete obj.id;
  delete obj.headquarters;
  delete obj.links;
  delete obj.summary;

  const keys = Object.entries(obj);
  let htmlData = [];

  keys.forEach((key) => {
    htmlData.push(
      <div key={String(key[0]).concat(Math.random())} className={styles.key}>
        {key[0].toUpperCase()}
      </div>
    );
    htmlData.push(
      <div key={String(key[1]).concat(Math.random())}>{key[1]}</div>
    );
  });
  
  return (
    <div className={styles.container} key={key}>
      {htmlData}
    </div>
  );
};
export default Keys;
