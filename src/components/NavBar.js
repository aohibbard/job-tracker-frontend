import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>

            <NavLink style={{ marginRight: '10px' }} 
                to="/"
            >
            Dashboard
            </NavLink>

            <NavLink style={{ marginRight: '10px' }} 
                to="/contacts"
            >
            Contacts
            </NavLink>

            <NavLink style={{ marginRight: '10px' }} 
                to="/jobs"
            >
            Jobs
            </NavLink>

            {/* <NavLink style={{ marginRight: '10px' }} 
                to="/login"
            >
            LogIn
            </NavLink> */}

            {/* <NavLink style={{ marginRight: '10px' }} 
                to="/users/:id/home">
            My Page
            </NavLink> */}

        </div>
    )
}

export default NavBar;

