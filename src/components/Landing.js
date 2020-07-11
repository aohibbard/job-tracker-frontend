import React from 'react';
import {Link} from 'react-router';

const Landing = () => {
    return (
        <div>
            <Link to='/login'>Log In</Link>
            <br />
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Landing;