import React from 'react'
import LatestLaunches from '../components/latest-launches'
import UpcomingLaunches from '../components/upcoming-aunches'

export default function Launches() {
    return (
        <>
        <h1>Launches</h1>

        <div className='launches-box'>
            
            <UpcomingLaunches />
            <LatestLaunches />
            <UpcomingLaunches />
                   
        </div>
        </>
    )
}
