import React from 'react' ; 
import styles from './Summary.css' ; 

const summary = (props) => {
    return (
        <div className={styles.summary}>
            <p>{props.summary}</p>
        </div>
    )
}

export default summary ; 