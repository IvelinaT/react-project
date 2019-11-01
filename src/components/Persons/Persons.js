import React from 'react'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'

const persons = (props) => {
  const rnd = Math.random()
  if (rnd > 0.7) {
    throw new Error('Something went wrong')
  }
  props.persons.map((person, index) =>
    <ErrorBoundary key = {person.id}>
      <Person
        key = {person.id}
        name = {person.name}
        age = {person.age}
        changed = {(event) => props.changed(event, person.id)}
        clicked = { () => props.clicked(index)}
      />
    </ErrorBoundary>
  )
}
export default persons
