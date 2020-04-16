import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';

//import components
// import Home from './components/Home'
import Contacts from './containers/Contacts'
import Jobs from './containers/Jobs'
import LogIn from './containers/LogIn'
import UserHome from './containers/UserHome'

export default class App extends Component{

  // componentDidMount(){
  //   console.log("Component did mount")
  //   fetch('http://localhost:3000/api/users/1')
  //   .then(console.log("Hit Second Line"))
  //   .then(res => res.json())
  //   .then(console.log("Hit Third Line"))
  //   .then(data => console.log(data))
  // }

  state = {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount(){
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  loginStatus = () => {
    fetch('http://localhost:3000/api/logged_in', {withCredentials: true})
    .then(res => {
      if (res.data.logged_in){
        this.handleLogin(res)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api error', error))
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={LogIn} />
          <Route path='/users/:id/home' component={UserHome} />
          <Route path='/users/:id/contacts/index' component={Contacts} />
          <Route path='/users/:id/jobs' component={Jobs} />
        </div>
      </Router>
    );
  }

}