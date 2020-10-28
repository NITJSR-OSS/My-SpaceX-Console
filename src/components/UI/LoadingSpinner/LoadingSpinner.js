import React from "react";
import styles from "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className={styles.body}>
      <div className={styles.loader}>
        <div className={styles.face}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.face}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
