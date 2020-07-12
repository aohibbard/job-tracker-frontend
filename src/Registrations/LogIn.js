//NOT IN USE - FOR FUTURE GROWTH
import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component{

    state = {
        username: '',
        errors: ''
    }

    componentWillMount() {
        return this.props.loggedInStatus ? this.redirect() : null
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = this.state
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user, {withCredentials: true})
        }
        fetch('http://www.localhost:3000/login', configObj)  
            .then(res => {
                if (res.data.logged_in){
                    this.props.handleLogin(res.data)
                    this.redirect()
                } else {
                    this.setState({
                        errors: res.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))      

        // reset field
        this.setState({
            username: ''
        })
    }

    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map(error => {return <li key={error}>{error}</li>})}
                </ul>
            </div>
        )
    }

    render(){
        // const {username} = this.state

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