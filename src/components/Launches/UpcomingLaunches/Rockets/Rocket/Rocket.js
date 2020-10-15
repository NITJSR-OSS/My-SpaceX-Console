import React from 'react' ; 
import thumbnail1 from '../../../../../assets/thumbnail1.jpg' ; 
import thumbnail2 from '../../../../../assets/thumnail2.jpg' ; 
import thumbnail3 from '../../../../../assets/thumbnail3.jpg' ; 
import styles from './Rocket.css' ; 

const rocket = (props) => {
    var d = new Date() ; 
    var currentTime = d.getUTCMilliseconds() ; 
    var Rockettime = props.time ; 
    var timeLeft = Math.abs(Rockettime-currentTime) ; 
    var days = Math.round(timeLeft / (1000*60*60*24)) ; 
    
    function printing(){
        alert('ButtonClicked') ; 
    }

    
    var image = props.image ; 
    if(image==null){
        let arr = [] ; 
        arr.push(thumbnail1) ; 
        arr.push(thumbnail2) ; 
        arr.push(thumbnail3) ;
        image =  arr[Math.floor(Math.random() * arr.length)]; 
    }
    return (
        <div className={styles.rocket}>
          <img className={styles.image} src={image} alt={image} onClick={printing}/>
          <p className={styles.name}>{props.name}</p> 
          <p className={styles.number}>{props.number}</p>
          <p className={styles.days}>{days} days {props.timing}</p>
        </div>
    ) ; 
} ; 

export default rocket ; 