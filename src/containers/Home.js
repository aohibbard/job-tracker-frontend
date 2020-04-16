import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <div>
                <Link to='/login'>Login</Link>
                {/* <br /> */}
                {/* <Link to='/signup'>Sign Up</Link> */}
            </div>
        )
    }
}

export default Home;