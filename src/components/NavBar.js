import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const linkCss = {marginRight: '10px', color: 'white', fontWeight: 'bold'}
    return (
<div class="NavBar" style={{paddingTop: '8px', paddingBottom: '10px', marginBottom: '12px', backgroundColor: "purple" }} role="navigation">
            <NavLink style={linkCss} 
                to="/"
            >
            Dashboard
            </NavLink>

            <NavLink style={linkCss}
                to="/contacts"
            >
            Contacts
            </NavLink>

            <NavLink style={linkCss} 
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