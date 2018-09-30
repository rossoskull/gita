import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = (
        <div>
            <li><NavLink exact className='waves-effect' to="/gita/">Home</NavLink></li>
            <li><NavLink className='waves-effect' to="/gita/about">About</NavLink></li>
            <li><NavLink className='waves-effect' to="/gita/source">Source</NavLink></li>
        </div>
    );

    return(
        <header>
            <nav className='blue'>
                <div className="nav-wrapper container">
                    <a href="/gita/" className="brand-logo">Bhagwada Gita</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {menuItems}
                    </ul>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    {menuItems}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;