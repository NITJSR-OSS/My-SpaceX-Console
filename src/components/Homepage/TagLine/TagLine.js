import React from 'react' ; 
import styles from './TagLine.css' ; 

const tagLine = (props) => {
    let str = String(props.add) ;
    let newstr = str.substr(0,74).toUpperCase() ; 
   return (
       <div className={styles.TagLine}>
           <p>
               {newstr}
           </p>
       </div>
   )
}
 
export default tagLine ; 