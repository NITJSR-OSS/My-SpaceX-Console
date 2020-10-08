import React , { Component } from 'react' ; 
import axios from 'axios' ;
import Homepage from '../../components/Homepage/Homepage' ; 

class MySpaceX extends Component {
    state = {
         infos : {} ,
    }

    componentDidMount () {
       axios.get('https://api.spacexdata.com/v4/company')
            .then( response => {
                   const informs = (response.data) ; 
                   const updatedInfo = {
                       ...informs ,
                   };

                   this.setState({
                       infos : updatedInfo , 
                   }) 
            }) ;
   }
   
    render() {
        return (
           <p>{this.state.infos.name}</p>
        )
    }
}

export default MySpaceX ; 