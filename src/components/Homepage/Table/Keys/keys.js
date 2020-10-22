import React from 'react' ; 
import styles from './keys.css' ;
 
const keys = (props) => {
     let obj = props.reqData ; 
     delete obj.headquarters ; 
     delete obj.links ; 
     delete obj.id ;
     delete obj.summary ;  
    
     const keys = Object.entries(obj) ;
     let htmlData = [] ; 

     keys.forEach(key=>{
        htmlData.push(<div id={key[0]} className={styles.key}>{key[0].toUpperCase()}</div>)
        htmlData.push(<div id={key[1]}>{key[1]}</div>)
    })
    
    return (
          <div className={styles.container}>  
              {htmlData}
          </div>
    ) ;
}
export default keys ; 