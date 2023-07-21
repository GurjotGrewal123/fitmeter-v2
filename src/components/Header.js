import '../styles/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../images/fitmeter-logo.png';

import React from 'react';



const Header = () => {

    return (
        <div className="navbar">
            <div class="navbar-logo">
                <Link to="/fitmeter-v2">
                    <img href="/fitmeter-v2" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div class="navbar-pages">
                <ul class="navbar-links">
                    <li><Link to="/fitmeter-v2/Progress">Progress</Link></li>
                    <li><Link to="/fitmeter-v2/Nutrition">Nutrition</Link></li>
                    <li><Link to="/fitmeter-v2/Workout">Workout</Link></li>
                </ul>
            </div>
            <div className='navbar-cart'>
                <div classname="cart">
                </div>
            </div>
        </div>

    )

}

export default Header


