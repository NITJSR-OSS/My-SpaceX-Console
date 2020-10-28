import React from "react";
import styles from "./keys.css";

const keys = (props) => {
  let obj = props.reqData;
  delete obj.headquarters;
  delete obj.links;
  delete obj.id;
  delete obj.summary;

  const keys = Object.entries(obj);
  let htmlData = [];

  keys.forEach((key) => {
    htmlData.push(
      <div className={styles.key} key={String(key[0]).concat(Math.random())}>
        {key[0].toUpperCase()}
      </div>
    );
    htmlData.push(
      <div key={String(key[1]).concat(Math.random())}>{key[1]}</div>
    );
  });

  return <div className={styles.container}>{htmlData}</div>;
};
export default keys;
