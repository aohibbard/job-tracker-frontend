import React from 'react';
// import {Link} from 'react-router';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <NavLink to='/login'>Log In</NavLink>
            <br />
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    )
}

export default Landing;