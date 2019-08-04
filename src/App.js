import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ann', age: 35 },
      { id: 2, name: 'Vlad', age: 7 },
      { id: 3, name: 'Stas', age: 2 }
    ],
    showPerson: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  showPersonHandle = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  deletePersonHandler = personIndex => {
    this.setState({
      persons: this.state.persons.filter((p, index) => personIndex !== index)
    });
  };

  render() {
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '7px',
      padding: '5px 15px',
      textAlign: 'center',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push('red');
    }
    if (this.state.persons.length < 2) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>Dynamic slasses properties!</p>
          <div>
            <button style={styles} onClick={this.showPersonHandle}>
              Toggle Persons
            </button>
            {this.state.showPerson && (
              <div>
                {this.state.persons.map((person, index) => (
                  <Person
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    changed={event => this.nameChangeHandler(event, person.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
