import React from 'react'
import Person from './person'

const Persons = ({ persons, remove }) => {
	const rows = () => persons.map(person =>
		<Person key={person.name} name={person.name} number={person.number} remove={() => remove(person.id)}/>
	)

	return (
		<ul>
			{rows()}
		</ul>
	)
}

export default Persons