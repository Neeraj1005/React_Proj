import React, { Component } from 'react';
// import logo from './logo.svg';
// import Person from './Person/Person';
import './App.css';
import InputName from './ComponentInput/UserInput.js';
import UserOutput from './ComponentOutput/UserOutput.js';

class App extends Component {

  state = {
    userfirstname: "Enter your First name",
    userlastname: "Enter your Last name",

  }

  usernameChangedHandler = (event) => {
    this.setState(
        {
          userfirstname: event.target.valuefirst, 
          userlastname: event.target.valuelast
        }
      )
}

  render() {
    return (
      <div className="App">
          <label>First Name:  
          <InputName firstname ={this.usernameChangedHandler} valuefirst ={this.state.userfirstname} /></label>
          <br />
          <br />
          <label>Last Name :
          <InputName lastname ={this.usernameChangedHandler} valuelast ={this.state.userlastname} />
          </label>
          <UserOutput MyNamefirst={this.state.userfirstname} />
          <UserOutput MyNamelast={this.state.userlastname} />
      </div>
    );
  }
}


export default App;
