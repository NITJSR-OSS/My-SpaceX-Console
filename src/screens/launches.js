import React from 'react'
import LatestLaunches from '../components/latest-launches'
import PastLaunches from '../components/past-launches'
import UpcomingLaunches from '../components/upcoming-launches'

import '../css/launches.css'

export default function Launches() {
    return (
        
       

        <div className='launches-box'>
            
            <PastLaunches />
            <LatestLaunches />
            <UpcomingLaunches />
                   
        </div>
        
    )
}
