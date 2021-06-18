import React, { useState } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

const app = props => {
  return (
      <div className="App">
        <h1>Hi I am ReactApp!</h1>
        <p>This is realy working. ()</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

    );
}

export default app;

state = {
  persons: [
      { name: 'Max', age : 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
  ],
  otherState : 'some other value'
}

switchNameHandler = () =>{
//console.log('Was clicked!');
// Dont do this  ---  this.state.persons[0].name = 'Maximilian';
this.setState({
  persons:[
    { name: 'Maximilian', age : 28},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 14.5}
  ]
})
}