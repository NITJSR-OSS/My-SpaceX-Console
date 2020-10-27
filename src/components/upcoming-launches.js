import React from 'react'
import { Link } from 'react-router-dom';
import { getUpcomingLaunches } from '../api/UpcomingLaunches';
import { useQuery } from 'react-query';
import logo from '../assets/logo.png'

export default function UpcomingLaunches() {

    // const [upcomingLaunches,setUpcomingLaunches]=useState([]);
    // const [loading, setLoading]=useState(true);

    const { isLoading, isError, data, }=useQuery('UpcomingLaunches',getUpcomingLaunches);
    console.log(data);

    //  getUpcomingLaunches().then(
    //     (r)=>{setUpcomingLaunches(r); console.log(r);setLoading(false)}
    // )
    // useEffect(() => {
      
    //     const loadLaunches= async ()=>{
    //         setLoading(true);
    //         const newLaunches=await getUpcomingLaunches();
            
    //         setUpcomingLaunches([newLaunches]);
    //         setLoading(false);  
    //     }
    //     loadLaunches();
        
    // })
    return (
        <div className="upcoming-launches launches card">
                <h1>upcoming launches</h1>
                <div className='launches-scrollbox'>
                {!isLoading&& !isError && data.map(
                launches=>
                //  {const id=launches.rocket.rocket_id;}
                <Link to={'/launches/'+launches.id} key={launches.flight_number}><li><div className="tile-logo"><img src={logo} alt=""/></div><p className="tile-title">  {launches.name} </p></li></Link>
                )}
                 {isLoading && <li>
                    <div className="loading-box">
                        <div className="loading-conponents loading1"></div>
                        <div className="loading-conponents loading2"></div>
                        <div className="loading-conponents loading3"></div>
                        

                    </div>
                 </li>}
                 
                </div>

        </div>
    )
}
