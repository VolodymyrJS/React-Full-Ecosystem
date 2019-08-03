import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ann', age: 35 },
      { name: 'Vlad', age: 7 },
      { name: 'Stas', age: 2 }
    ],
    showPerson: false
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

  showPersonHandle = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <div>
          <button onClick={this.showPersonHandle}>Show Person</button>
          {this.state.showPerson && (
            <div>
              {this.state.persons.map(person => (
                <Person name={person.name} age={person.age} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
