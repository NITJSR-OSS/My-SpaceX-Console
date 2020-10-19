import React, {Component} from 'react' ; 
 import axios from 'axios' ; 
import LaunchDetails from '../../components/Launches/LaunchDetails/LaunchDetails' ; 
import {reactLocalStorage} from 'reactjs-localstorage';

class LaunchDetailsData extends Component {

    state = {
        id : 0,
        data : [],
        isLoaded : false
    } 
    
    componentDidMount(){
        const rocketid = localStorage.getItem('count') ; 
        console.log(rocketid) ; 
        this.setState({id:rocketid}) ; 
        console.log(this.state.id,'       printing this') ; 
        axios.get('https://api.spacexdata.com/v4/launches/'+rocketid) 
             .then(response => {
                 const updatedData = response.data ; 
                 this.setState({
                     data : updatedData,
                     isLoaded : true
                 })
             })
        }; 
    
    render(){
        console.log(this.props.id) ;
        const{data,isLoaded} = this.state ;
        if(isLoaded){
            let missionDetails = [] ;
            let cores = [] ;   
            let links = [] ; 
            missionDetails.push(data.name) ; 
            missionDetails.push(data.summary) ; 
            missionDetails.push(data.flight_number) ;
            missionDetails.push(data.success) ;
            missionDetails.push(data.date_utc) ; 
            links.push(data.links.reddit.campaign) ;
            links.push(data.links.reddit.launch) ;
            links.push(data.links.reddit.media) ;
            links.push(data.links.presskit) ;
            links.push(data.links.webcast) ;
            
            return(
                <LaunchDetails 
                //    name={data.name}
                //    summary={data.summary}
                //    number = {data.flight_number}
                      data = {data}
                />
            )
        }
        return(
           <h1>...Loading</h1>
        )
    } 
}

export default LaunchDetailsData ; 