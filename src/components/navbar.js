import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import Logo from '../assets/spacexconsole_logo.svg';
import logo from '../assets/logo.svg';
import '../css/navbar.css'

function navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><img src={logo} alt=""/><img src={Logo} alt=""/>   </Link>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/launches">Launches</NavLink></li>     
                <li><NavLink to="/launchpad-map">Launchpad map</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar
