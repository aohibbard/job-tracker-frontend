//NOT IN USE - FOR FUTURE GROWTH


import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component{

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
        debugger
        this.props.login(this.state)
        this.setState({
            username: ''
        })
    }

    render(){
        return(
            <div>
                Log In Page
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Log In</button>
                    <div>
                    or <Link to='/signup'>sign up</Link>
                    </div>
                </form>
            </div>  
        )
    }
}

export default Login;