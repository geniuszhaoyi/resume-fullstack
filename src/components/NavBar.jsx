import React from 'react';
import { Link } from "react-router-dom";

import './navBar.scss';

export default function NavBar() {
    return <div id='NavBar' className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}
