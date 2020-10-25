import React from 'react' ; 
import styles from './TagLine.css' ; 
import Heading from '../../UI/Heading/Heading' ; 

const tagLine = (props) => {
    let str = String(props.add) ;
    let newstr = str.substr(0,74).toUpperCase() ; 
   return (
       <div className={styles.TagLine}>
          <Heading title={newstr}/>
       </div>
   )
}
 
export default tagLine ; 