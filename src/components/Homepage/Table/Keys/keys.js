import React from 'react' ; 
import styles from './keys.css' ;
import Key from './Key/Key' ; 

const keys = (props) => {
     let obj = props.reqData ; 
     delete obj.headquarters ; 
     delete obj.links ; 
     delete obj.id ;
     delete obj.summary ;  
    
    
     const keys = Object.entries(obj) ;
     let htmlData = [] ; 
    //  console.log(keys);
     keys.forEach(key=>{
        htmlData.push(<Key id={key[0]} data={key[0].toUpperCase()}/>)
     })
    return (
          <div className={styles.key}>
              {htmlData}
          </div>
    ) ;
}
export default keys ; 