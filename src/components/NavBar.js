import React from 'react';
import { NavLink } from 'react-router-dom';

// covert to class or use a hook
/*
in logout
const handleLogout = () => {
    fetch('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))

}
*/


const NavBar = () => {
    const linkCss = {marginRight: '10px', color: 'white', fontWeight: 'bold'}
    return (
        <div class="NavBar" style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', backgroundColor: "purple", textColor: "black", }} role="navigation">

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
            >Jobs</NavLink>

            {/* <NavLink style={{ marginRight: '10px' }} 
                to="/login"
            >
            LogIn
            </NavLink> */}

            {/* <NavLink style={{ marginRight: '10px' }} 
                to="/users/:id/home">
            My Page
            </NavLink> */}

            {/* { this.props.loggedInStatus ? <NavLink style={{ marginRight: '10px' }}
                to="/logout">Log Out</NavLink> : null} */}

        </div>
    )
}

export default NavBar;