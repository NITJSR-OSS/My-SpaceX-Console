import React from 'react'  ; 
import styles from './Rockets.css' ; 
import Rocket from './Rocket/Rocket' ; 

const Rockets = (props) => {
    let name = props.name ; 
    let time = props.time ; 
    let number = props.number ; 
    let image = props.image ; 
    
    let rocket = [] ; 
    for(let i=0 ; i<name.length ; i++){
      rocket.push(
          <Rocket name={name[i]} time={time[i]} number={number[i]} image={image[i]} timing={props.timing} />
        ) ;
    } ;

    return(
        <div className={styles.rockets}>
            {rocket}
        </div> 
    );
} ; 

export default Rockets ; 

