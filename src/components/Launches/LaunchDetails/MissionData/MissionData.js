import React from 'react' ; 
import styles from './MissionData.css' ; 
import Heading from '../../UpcomingLaunches/UpcomingLaunchesHeading/UpcomingLaunchesHeading' ;  

const missionData = (props) => {
    return(
        <div className={styles.missionData}>
            <Heading title={props.name}/>
            <div className={styles.summary}>
                {props.summary}
            </div>
            <Heading title="Mission Details" />
            <div className={styles.details}>
            
            </div>
        </div>
    ) ;
}

