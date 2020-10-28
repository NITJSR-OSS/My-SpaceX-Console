import React from 'react'
import '../css/home.css'
import logo from '../assets/logo_x.svg'
import { Link } from 'react-router-dom'
// import Particles from 'react-particles-js';
export default function Home() {
    return (
        <div className='home' >
            <p>Get started with spacex console</p>
            <Link to="/launches"className='button'>LAUNCHES</Link>
            
            <img src={logo} alt="" className='logo' />
                
        </div>
    )
}
