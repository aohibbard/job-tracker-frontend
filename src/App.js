import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';

//import components
import Contacts from './containers/Contacts'
import Jobs from './containers/Jobs'
import UserHome from './containers/UserHome'

export default class App extends Component{


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