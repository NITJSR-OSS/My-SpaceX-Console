import React from 'react' ; 
import styles from './OverView' ; 

const overview = (props) => {
   return (
       <div className={styles.Overview}>
           <div className={styles.heading}>
              <h1>Overview</h1>
           </div>
           <div>
            <p>{props.summary}</p>
           </div>
           <div>
               
           </div>
       </div>
   )
}