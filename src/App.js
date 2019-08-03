import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ann', age: 35 },
      { name: 'Vlad', age: 7 },
      { name: 'Stas', age: 2 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: 'Vlad', age: 7 },
        { name: 'Stas', age: 2 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: 'Vlad', age: 7 },
        { name: 'Stas', age: 2 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
            click={() => this.switchNameHandler('Sexy')}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      </div>
    );
  }
}

export default App;
