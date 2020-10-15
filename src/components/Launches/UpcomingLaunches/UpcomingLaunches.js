import React from 'react' ; 
import styles from './UpcomingLaunches.css' ; 
import Rockets from './Rockets/Rockets' ; 
import UpcomingLaunchesHeading from './UpcomingLaunchesHeading/UpcomingLaunchesHeading' ; 

const upcomingLaunches = (props) => {
    const obj = props.future ;
    console.log(obj) ;
    const name =[] ; 
    const time = [] ;
    const number = [] ; 
    const image = [] ; 
    obj.map(value => {
       name.push(value.name) ; 
       time.push(value.date_unix); 
       number.push(value.flight_number) ;
       image.push(value.links.patch.small) ;  
    }) ;
    
    return (
         <div className={styles.futureLaunches}>
                <UpcomingLaunchesHeading title="Upcoming Launches"/>
                <Rockets 
                    name = {name}
                    time = {time}
                    number = {number}
                    image = {image}
                    timing = "left"
                />
         </div>
    ) ; 
} ; 

export default upcomingLaunches ; 