import React from 'react'
import { logo } from '../static'
import { Link } from 'react-router-dom';
const navbar = () => {
    return (
        <>
            <nav className="top" id="navbar">
                <ul>
                    <div id="logo"> <img src={logo} />DA</div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/service">Services</Link> </li>
                    <li><Link to="/classinfo">Class</Link> </li>
                    <li><Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default navbar
