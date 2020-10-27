import React from 'react'
import { getLatestLaunches } from '../api/LatestLaunches'
import { useQuery } from 'react-query';
import '../css/latestLaunches.css'
export default function LatestLaunches() {

    const { isLoading, isError, data, }=useQuery('LatestLaunches',getLatestLaunches);
    console.log(data);
    return (
        <div className="launches latest-launches card">
            {isLoading && 
                    <div className="loading-box">
                        <div className="loading-conponents loading1"></div>
                        <div className="loading-conponents loading2"></div>
                        <div className="loading-conponents loading3"></div>
                        

                    </div>
                 }
                 {!isLoading&& !isError && <>
                <h1>latest launches</h1>
                <p className='latest-launches-title'>{data.mission_name} <span className="new">NEW</span> </p>
                <img className='latest-launches-image' src={data.links.mission_patch_small} alt=""/>
                 <p className="details">{data.details}</p>
                </>
                 }
        </div>
    )
}
