import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPastLaunches } from '../api/PastLaunchesAPI';
import '../css/loading-animation.css'


export default function PastLaunches() {

//     const [page, setPage]=useState(1);
//    // const [pastLaunches,setPastLaunches]=useState([]);
//     const [loading, setLoading]=useState(true);
    // const [end]=useState(false);
    const { isLoading, data }=useQuery('pastLaunches',getPastLaunches);
    console.log(data);



//    useEffect(()=>{  getPastLaunches().then(
//     (r)=>{setPastLaunches(r); console.log(r);setLoading(false)}
// )})
  


    // const handleScroll=(e)=>{
    //     const {scrollTop,clientHeight,scrollHeight}=e.currentTarget;
    //     console.log('scrollTop');
    //     console.log(scrollTop);
    //     console.log('clientHeight');
    //     console.log(clientHeight);
    //     console.log(scrollHeight);
    //     if(scrollHeight-scrollTop===clientHeight && !end)
    //     {
    //         setPage(prev=>prev+1)
    //     }
    // }


    // useEffect(() => {
      
    //     const loadLaunches= async ()=>{
    //         setLoading(true);
    //         const newLaunches=await getPastLaunches(page);
    //         if(newLaunches.length<30)
    //         {   setPastLaunches(prev=>[...prev,...newLaunches]);
    //             setEnd(true);
    //             setLoading(false);
    //             return;


    //         }
    //         setPastLaunches(prev=>[...prev,...newLaunches]);
    //         setLoading(false);
            
    //     }
    //     loadLaunches();
        
    // }, [page])
    return (

    
        <div className="launches past-launches card" >
                <h1>past lauches</h1>
                <div className='launches-scrollbox'  >
                 
                {!isLoading && data.map(
               launches=>
                    // {const id=launches.rocket.rocket_id;}
                   <Link to={'/launches/'+launches.id} key={launches.flight_number}><li><div className="tile-logo"><img src={launches.links.patch.small} alt=""/></div><p className="tile-title">  {launches.name} <span className={launches.success?'success':'failed'}>{launches.success?'SUCCESS':'FAILED'}</span></p></li></Link>
                     )} 
                 {isLoading && <li>
                    <div className="loading-box">
                        <div className="loading-conponents loading1"></div>
                        <div className="loading-conponents loading2"></div>
                        <div className="loading-conponents loading3"></div>

                    </div>
                 </li>}
                 {/* {end && <li> reached to end</li>} */}
                </div>
            

        </div> 
       
       
    
    )
}
