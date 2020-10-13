import React from 'react' ; 
import styles from './values.css' ; 
import Key from '../Keys/Key/Key' ; 

const values = (props) => {
    let obj = props.reqData ; 
    delete obj.headquarters ; 
    delete obj.links ; 
    delete obj.id ;
    delete obj.summary ;  

    const keys = Object.entries(obj) ;
     let htmlData = [] ; 
    //  console.log(keys);
     keys.forEach(key=>{
        htmlData.push(<Key id={key[1]} data={key[1]}/>)
     })
    return (
          <div className={styles.values}>
              {htmlData}
          </div>
    ) ;
}
export default values ; 