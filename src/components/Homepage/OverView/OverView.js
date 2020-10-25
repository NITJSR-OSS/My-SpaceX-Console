import React from 'react' ; 
import styles from './OverView.css' ; 
import Heading from '../../UI/Heading/Heading' ; 

const overview = (props) => {
   return (
       <div className={styles.Overview}>
          <Heading title="Overview"/>
       </div>
   )
}

export default overview ; 