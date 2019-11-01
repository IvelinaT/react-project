import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const AppHooks  = (props) => {
  const [personState, setPersonState] =   useState({
    persons: [
      { id: 2, name: 'Max', age: 28 },
      { id: 3, name: 'Manu', age: 29 },
      { id: 4, name: 'Stephanie', age: 26 }
    ]
  })

  const [showPersonsState, setShowPersonsState] = useState({
	showPersons: false  
  })

  const togglePersonsHandler = () => {
    setShowPersonsState(
      {
        showPersons: !showPersonsState.showPersons
      }
    )
  }

  const deletePersonHandler = (index) => {
		let persons = [...personState.persons ] 
		persons.splice(index, 1)
		setPersonState({
		  persons
		})
	   }
	   

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
	}
	
    let persons = null
    if (showPersonsState.showPersons) {
      persons = (
        personState.persons.map( (person, index)  => {
          return <Person
            key = {index}
            name = {person.name}
            age = {person.age}
           click = { () => deletePersonHandler(index)}
          /> 
        })
      )
    }
    return (
      <div className="App">
        <h1>React App</h1>
        <p>This is really working!</p>
        <button style= {style} onClick={togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  
}


  
  
export default AppHooks
