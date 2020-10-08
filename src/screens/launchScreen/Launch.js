import React from 'react'
import Row from './Row'
import './Launch.scss'
import Header from '../../components/header/Header'

function Launch() {

    const [rows,setRows] =  React.useState([
        {title:'Latest Launch',url:'/launches/latest'},
        {url:'/launches/past',title:'Past Launches'},
        {url:'/launches/next',title:'Next Launch'},
        {url:'/launches/upcoming',title:'Upcoming Launches'}
    ])
    return (
        <div className='launch-screen-container'>
            <div className='launch-screen'>
                <div className='launch-header'>
                    <Header title='Launch Pad'/>
                </div>
                <div className='launch-header-logo'>
                    <div className='launch-header-logo-overlay'>

                    </div>
                </div>
                <div className='launch-body'>
                    {
                        rows.map(row =>
                            <Row title={row.title} url={row.url}/>
                        )  
                    }
                </div>
            </div>
        </div>
    )
}

export default Launch
