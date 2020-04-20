//NOT IN USE - FOR FUTURE GROWTH


import React from 'react';
import { Link } from 'react-router-dom'

class SignUp extends React.Component{

    state = {
        username: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
        return(
            <div>
                Sign Up Page
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Sign Up</button>
                    <div>
                    or <Link to='/login'>Log In</Link>
                    </div>
                </form>
            </div>  
        )
    }
}

export default SignUp;