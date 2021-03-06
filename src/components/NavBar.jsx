import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './navBar.scss';

export default function NavBar() {
    let location = useLocation();
    let showNavBar = true;

    const paths = ['/resume', '/demo'];
    paths.forEach(p => {
        if (location.pathname.indexOf(p) >= 0) {
            showNavBar = false;
        }
    })


    if (showNavBar) {
        return <div id='NavBar' className='navBar'>
            <Link to="/">Home</Link>
            <Link to="/color">Colorful Resume</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/about">About</Link>
        </div>
    } else {
        return null;
    }
}
