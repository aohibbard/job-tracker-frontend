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

            { this.props.loggedInStatus ? <NavLink style={{ marginRight: '10px' }}
                to="/logout">Log Out</NavLink> : null}

        </div>
    )
}

export default NavBar;