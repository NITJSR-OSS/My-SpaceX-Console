import React from "react";
import styles from "./MissionData.css";
import Heading from "../../../UI/Heading/Heading";


const missionData = (properties) => {
  let props = properties.props;
  let name = props.name;
  let dateUTC = props.date_utc;
  var date = new Date(dateUTC);
  let exactDate = date.toUTCString();
  let flightnumber = props.flight_number;
  let success = props.success ? "Yes" : "No";
  let window = props.window ? "Yes" : "No";
  let net = props.net ? "Yes" : "No";
  let tdb = props.tdb ? "Yes" : "No";
  let summary = props.details;

  return (
    <div className={styles.missionData}>
      <div className={styles.heading}>
        <div className={styles.line}></div>
        <Heading title="Rocket" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.key}>Number</div>
        <div>{flightnumber}</div>
        <div className={styles.key}>Name</div>
        <div>{name}</div>
        <div className={styles.key}>Time</div>
        <div>{exactDate}</div>
        <div className={styles.key}>Success</div>
        <div>{success}</div>
        <div className={styles.key}>Window</div>
        <div>{window}</div>
        <div className={styles.key}>net</div>
        <div>{net}</div>
        <div className={styles.key}>tdb</div>
        <div>{tdb}</div>
        <div className={styles.key}>Summary</div>
        <div>{summary}</div>
      </div>
    </div>
  );
};

export default missionData;
