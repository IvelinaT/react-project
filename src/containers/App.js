import React, { Component } from 'react'
import './App.css'
import Person from '../components/Persons/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 2, name: 'Max', age: 28 },
      { id: 3, name: 'Dave', age: 29 },
      { id: 4, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  
  togglePersonsHandler = () => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    )
  }

  deletePersonHandler = (index) => {
   let persons = [...this.state.persons ] 
   persons.splice(index, 1)
   this.setState({
     persons
   })
  }

   nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    const person = {
      ...this.state.persons[personIndex],
    }
    person.name = event.target.value
    
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        this.state.persons.map( (person, index)  => {
          return <Person
            key = {index}
            name = {person.name}
            age = {person.age}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            click = { () => this.deletePersonHandler(index)}
          /> 
        })
      )
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>
        <button style= {style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App
