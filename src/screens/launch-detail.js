

import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/launch-detail.css'
import { useQuery } from 'react-query';


 const getLaunches= async (key,id)=>{
    const pastLaunches=  await (await fetch(`https://api.spacexdata.com/v4/launches/${id}`)).json();
    console.log(pastLaunches);
    return pastLaunches;
}

export default function LaunchDetails() {
    let { id } = useParams();
    console.log(id);
    const { isLoading, isError, data}=useQuery(['LatestLaunches',id],getLaunches);
    

    return (
        <div className='launch-details'>
            {isLoading && 
                    <div className="loading-box">
                        <div className="loading-conponents loading1"></div>
                        <div className="loading-conponents loading2"></div>
                        <div className="loading-conponents loading3"></div>
                    </div>
            }
            {!isLoading && !isError&& 
             <>
             <div className="details-box">
                 <img src={data.links.patch.small} alt="" className="detail-image"/>
                 <div className="discription-box">
                     <p className="title">
                         {data.name}

                     </p>
                     <div className="divider"></div>
                     <p className="discription">
                         {data.details}

                     </p>
                     <a href={data.links.article} className="read-more">Read Full Article</a>
                 </div>

             </div>

             
           
             </>
            
            }
            
            
        </div>
    )
}

