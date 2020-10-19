import React,{useEffect,useState} from 'react' ; 
import styles from './LaunchDetails.css' ; 
import Nav from '../../Logo/Logo' ; 
import axios from 'axios' ; 

const LaunchDetails = (props) => {
   const[data,updatedData] = useState(null) ; 
    
    useEffect(()=>{
      axios.get('https://api.spacexdata.com/v4/launches/'+localStorage.getItem('count')) 
      .then(response => {
          updatedData(response.data) ; 
          return ; 
      })
    }) ; 
     
    console.log(data) ; 
      
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

export default LaunchDetails ; 