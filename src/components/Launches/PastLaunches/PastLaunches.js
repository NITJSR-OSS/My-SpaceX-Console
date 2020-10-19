import React from 'react' ; 
import styles from './PastLaunches.css' ; 
import UpcomingLaunchesHeading from '../UpcomingLaunches/UpcomingLaunchesHeading/UpcomingLaunchesHeading' ; 
import Rockets from '../UpcomingLaunches/Rockets/Rockets' ; 

const pastLaunches = (props) => {
    const obj = props.past ;
    // console.log(obj) ;
    const name =[] ; 
    const time = [] ;
    const number = [] ; 
    const image = [] ; 
    const id = [];
    obj.map(value => {
       name.push(value.name) ; 
       time.push(value.date_unix); 
       number.push(value.flight_number) ;
       image.push(value.links.patch.small) ;  
       id.push(value.id) ;
    }) ;
    return(
        <div>
                <UpcomingLaunchesHeading title="Past Launches"/>
                <Rockets 
                    name = {name}
                    time = {time}
                    number = {number}
                    image = {image}
                    id = {id}
                    timing = "ago"
                />
         </div>
    ) ;
}

export default pastLaunches ; 