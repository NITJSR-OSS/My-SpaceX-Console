import React from 'react' ; 
import styles from './Key.css' ;
const key = (props) =>{
    return(
        <div className={styles.key}>{props.data}</div>
    )
}

export default key ;