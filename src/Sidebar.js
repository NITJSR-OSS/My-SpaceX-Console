import React from 'react'
import './Sidebar.scss'
import logo from './assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { AppsRounded, ExtensionRounded, HomeRounded, SettingsApplicationsOutlined, SettingsApplicationsRounded } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-primary">
                <div className="sidebar-primary-top">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="sidebar-primary-top-menu">
                        <NavLink to="/home" className="sidebar-primary-top-menu-item">
                            <HomeRounded className='icon'/>
                        </NavLink>
                        <NavLink to="/launch" className="sidebar-primary-top-menu-item">
                            <AppsRounded className='icon'/>
                        </NavLink>
                        <NavLink to="/extensions" className="sidebar-primary-top-menu-item">
                            <ExtensionRounded className='icon'/>
                        </NavLink>
                        <NavLink to="/settings" activeClassName="active" className="sidebar-primary-top-menu-item">
                            <SettingsApplicationsOutlined className='icon'/>
                        </NavLink>
                    </div>
                </div>
                {/* <div className="sidebar-primary-bottom">
                    <div className="sidebar-primary-bottom-item">
                        <Icon className="icon">perm_identity</Icon>
                    </div>
                </div> */}
            </div>  
        </div>
        
    )
}

export default Sidebar
