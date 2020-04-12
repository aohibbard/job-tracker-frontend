import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { connect } from 'react-redux';

//import components
import ContactInput from './components/ContactInput'
import Contacts from './containers/Contacts'

export default class App extends Component{

  // componentDidMount(){
  //   console.log("Component did mount")
  //   fetch('http://localhost:3000/api/users/1')
  //   .then(console.log("Hit Second Line"))
  //   .then(res => res.json())
  //   .then(console.log("Hit Third Line"))
  //   .then(data => console.log(data))
  // }

  render(){
    return (
      <Router>
      <div className="App">
        <NavBar />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path='/users/:id/contacts/index' component={Contacts} />
        <Route path='/users/:id/contacts/new' component={ContactInput} />
        {/* <Route path='/user/:id/jobs' component={Jobs} /> */}

      </div>
      </Router>
    );
  }

}

{/* const mapStateToProps
const mapDispatchToProps */}

{/* export default connect(mapStateToProps, mapDispatchToProps)(App);  */}