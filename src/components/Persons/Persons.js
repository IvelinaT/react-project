import React from 'react'
import ErrorBoundery from '../../ErrorBoundery/ErrorBoundery'
import Person from './Person/Person'

const persons = (props) =>
  props.persons.map((person, index) =>
    <ErrorBoundery key = {person.id}>
      <Person
        name = {person.name}
        age = {person.age}
        changed = {(event) => props.changed(event, person.id)}
        clicked = { () => props.clicked(index)}
      />
    </ErrorBoundery>
  )

export default persons
