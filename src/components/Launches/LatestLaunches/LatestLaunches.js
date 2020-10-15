import React from 'react' ; 
import UpcomingLaunchesHeading from '../UpcomingLaunches/UpcomingLaunchesHeading/UpcomingLaunchesHeading' ; 
import Rockets from '../UpcomingLaunches/Rockets/Rockets' ; 

const latestLaunches = (props) => {
    const value = props.present ;
    const name =[] ; 
    const time = [] ;
    const number = [] ; 
    const image = [] ; 
    name.push(value.name) ; 
    time.push(value.date_unix); 
    number.push(value.flight_number) ;
    image.push(value.links.patch.small) ;

    return(
        <div>
        <UpcomingLaunchesHeading title="Latest Launches"/>
        <Rockets 
            name = {name}
            time = {time}
            number = {number}
            image = {image}
            timing = "ago"
        />
 </div>
    ) ; 
}

export default latestLaunches ; 