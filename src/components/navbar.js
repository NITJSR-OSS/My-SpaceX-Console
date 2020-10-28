import React, {useState} from 'react'
import { NavLink,Link } from 'react-router-dom';
import Logo from '../assets/spacexconsole_logo.svg';
import logo from '../assets/logo.svg';
import {FaStream,FaTimesCircle} from 'react-icons/fa'
import '../css/navbar.css'

function Navbar() {

    const [clicked, setClicked] = useState(false);

    return (
        <>
        <nav className="navbar ">
            <Link to="/" className="logo"><img src={logo} alt=""/><img src={Logo} alt=""/>   </Link>
            <ul className="nav-links hide-on-phone" id="nav-links">
                <li><NavLink exact to="/" className='nav-links'>Home</NavLink></li>
                <li><NavLink to="/launches" className='nav-links'>Launches</NavLink></li>     
                <li><NavLink to="/launchpad-map" className='nav-links'>Launchpad map</NavLink></li>
            </ul>
            <li className="mob-menue show-on-phone hide" onClick={()=>setClicked(!clicked)}> {clicked?<FaTimesCircle />:<FaStream   />}</li>
        </nav>
        <nav className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={()=>setClicked(!clicked)}>
          
          <li><NavLink exact to="/" className='nav-links'>Home</NavLink></li>
          <li><NavLink to="/launches" className='nav-links'>Launches</NavLink></li>     
          <li><NavLink to="/launchpad-map" className='nav-links'>Launchpad map</NavLink></li>
          
        </ul>
      </nav>
      </>
    )
}

export default Navbar
