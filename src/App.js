import React, { Component } from 'react';
// import logo from './logo.svg';
// import Person from './Person/Person';
import './App.css';
import UserInput from './ComponentInput/UserInput.js';
import UserOutput from './ComponentOutput/UserOutput.js';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <h3>Hello! Nick This is my First React</h3>
//       <Person name="Max" age="24" />
//       <Person name="Maxi" age="23">My Hobbie is Gaming</Person>
//       <Person name="Nick" age="25"/>
//       </div>
//     );
//     // return React.createElement('div', {class:'App'}, React.createElement('h1',null,'my name is anthony'));
//   }
// }

class App extends Component {
// Task5
  state = {
    username: "HarryPotter"
  }
// Task6
  usernameChangedHandler = (event) => {
    this.setState(
      {username: event.target.value}
      )
}

  render() {
    return (
      <div className="App">
          <UserInput 
          changed ={this.usernameChangedHandler} 
          value ={this.state.username}
          />
          <UserOutput MyName="Nick" />
          <UserOutput MyName="Neo"/>
          <UserOutput MyName="Nicolas"/>
          <UserOutput MyName="Neeraj"/>
          //Task 5 
          <UserOutput MyName={this.state.username}/>
          <UserOutput MyName={this.state.username}/>
          <UserOutput MyName={this.state.username}/>
      </div>
    );
  }
}


export default App;
