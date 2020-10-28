import React from 'react';
import ElonMusk from '../../../assets/ElonMusk.png';
import styles from './ProfileCard.css'

const profile = (props) => {
    return (
    <span className={styles.card}>
        <img src={ElonMusk} alt="Elon" />
    </span>  
    )
} ; 

export default profile ; 