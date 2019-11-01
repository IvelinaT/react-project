import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classes from './App.css'
import Person from './Person/Person'
import ErrorBoundery from './ErrorBoundery/ErrorBoundery'

class App2 extends Component {
  state = {
    persons: [
      { id: 2, name: 'Max', age: 28 },
      { id: 3, name: 'Dave', age: 29 },
      { id: 4, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } )
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
      backgroundColor: 'yellow',
      color: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null
    let buttonClass = ''
   
    if (this.state.showPersons) {
      persons = (
        this.state.persons.map( (person, index)  => {
          return <ErrorBoundery key = {person.id}>
            <Person
              name = {person.name}
              age = {person.age}
              changed = {(event) => this.nameChangedHandler(event, person.id)}
              click = { () => this.deletePersonHandler(index)}
            />
          </ErrorBoundery>
        })
      )
      console.log(classes, 'classes')
      buttonClass = classes.Red
      console.log(buttonClass, 'buttonClass')
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      } 
    }
   
    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.Red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
      <StyleRoot>
      <div className='App'>
        <h1>React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={buttonClass}  
        // style = {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    )
  }
}

export default Radium(App2)
