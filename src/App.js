import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import {Switch} from 'react-router-dom';

//import components
import Contacts from './containers/Contacts'
import Jobs from './containers/Jobs'
// import LogIn from './Registrations/LogIn'
// import SignUp from './Registrations/SignUp'
import UserHome from './containers/UserHome'
// import Landing from './components/Landing'

export default class App extends Component{

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/users/1')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

// LOG IN FUNCTIONALITY TO BE IMPLEMENTED LATER

  // state = {
  //   isLoggedIn: false,
  //   user: {}
  // }

  // componentDidMount(){
  //   this.loginStatus()
  // }

  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }

  // loginStatus = () => {
  //   fetch('http://localhost:3000/api/logged_in', {withCredentials: true})
  //   .then(res => {
  //     if (res.data.logged_in){
  //       this.handleLogin(res)
  //     } else {
  //       this.handleLogout()
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // }

  // handleLogout = () => {
  //   this.setState({
  //     isLoggedIn: false,
  //     user: {}
  //   })
  // }


  // render(){
  //   return(
  //     <Router>
  //       <div className="App">
  //         <NavBar />
  //           <Switch>
  //             <Route exact path='/' render={props => (<Landing {...props} loggedInStatus={this.state.isLoggedIn} />)} />
  //             <Route exact path='/login' render={props => (<LogIn {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />) } />
  //             {/* <Route exact path='/signup' render={props => (<SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />) } /> */}
  //           </Switch>
  //       </div>
  //     </Router>
  //   )
  // }
  // original render
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/login" component={LogIn} /> */}
          <Route exact path='/' component={UserHome} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/jobs' component={Jobs} />
        </div>
      </Router>
    );
  }

}