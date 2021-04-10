import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am ReactApp!</h1>
        <p>This is realy working. ()</p>
        <Person />
        <Person />
      </div>

    );

    //return React.createElement('div' , {className:'App'}, React.createElement('h1' ,null ,'Does this work now ?'));

  }
}

export default App;
