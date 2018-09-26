import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = (
        <div>
            <li><NavLink exact className='waves-effect' to="/">Home</NavLink></li>
            <li><NavLink className='waves-effect' to="/about">About</NavLink></li>
            <li><NavLink className='waves-effect' to="/source">Source</NavLink></li>
        </div>
    );

    return(
        <header>
            <nav className='blue'>
                <div class="nav-wrapper container">
                    <a href="/" class="brand-logo">Bhagwada Gita</a>
                    <a href="" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {menuItems}
                    </ul>
                </div>
                <ul class="sidenav" id="mobile-demo">
                    {menuItems}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;