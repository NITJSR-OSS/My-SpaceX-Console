import React from 'react' ; 
import styles from './LaunchDetails.css' ; 
import Nav from '../../Logo/Logo' ; 

const launchDetails = (props) => {
    const data = props.data ; 
    
    return(
         <div className={styles.launchDetails}>
            <Nav/>
            <div className={styles.screenData}>
               <div className={styles.rocketImg}>
                 {props.image} 
               </div>
               <div className={styles.missionDetails}>
                  
               </div>
            </div>        
         </div>
    ) ; 
}

export default launchDetails ; 