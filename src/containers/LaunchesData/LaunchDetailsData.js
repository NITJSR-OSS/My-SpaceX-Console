import React, {Component} from 'react' ; 
 import axios from 'axios' ; 
import LaunchDetails from '../../components/Launches/LaunchDetails/LaunchDetails' ; 


class LaunchDetailsData extends Component {

    state = {
        id : this.props.id,
        data : [],
        isLoaded : false
    } 
    
    componentDidCatch(){
        axios.get('https://api.spacexdata.com/v4/launches/'+this.state.id)
             .then(response => {
                 const updatedData = response.data ; 
                 this.setState({
                     data : updatedData,
                     isLoaded : true
                 })
             })
        }; 
    
    render(){
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