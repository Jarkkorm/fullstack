import React, { useState, useEffect } from 'react'
import Persons from './components/persons'
import PersonForm from './components/personForm'
import personsService from './services/persons'
import Notification from './components/notifications'

const App = () => {
	const [ persons, setPersons ]     = useState([]) 
	const [ newName, setNewName ]     = useState('')
	const [ newNumber, setNewNumber ] = useState('')

	const [ notificationState, setNotificationState ] = useState({
		message: null,
		type: null
	})

	useEffect(() => {
		personsService
			.getAll()
			.then(initialPersons => {
				setPersons(initialPersons)
			})
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		if (persons.findIndex(person => person.name === newName) > -1) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
			}
		else {
			const personObject = {
				name: newName,
				number: newNumber,
			}
			personsService
				.create(personObject)
				.then(newPerson => {
					const newState = {
						message: `Added ${newPerson.name}`,
						type: 'note'
					}
					setNotificationState(newState)
					setTimeout(() => {
						setNotificationState({...notificationState, message: null})
					}, 5000)

					setPersons(persons.concat(newPerson))
					setNewName('')
					setNewNumber('')
				})
		}
	}
	
	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const removeHandler = (id) => {
		const person = persons.find(p => p.id === id)
		if ( window.confirm(`Delete ${person.name}?`)) {
			personsService
			.remove(id)
			.then(response => {
				const newState = {
					message: `${person.name} was deleted`,
					type: 'note'
				}
				setNotificationState(newState)
				setTimeout(() => {
					setNotificationState({...notificationState, message: null})
				}, 5000)

				setPersons(persons.filter(p => p.id !== id))
			})
	}}

	return (
    	<div>
			<h1>Phonebook</h1>

			<Notification state={notificationState}/>

			<h2>Add a number</h2>
			<PersonForm
				submitEvent={addPerson}
				nameValue={newName}
				nameChange={handleNameChange}
				numberValue={newNumber}
				numberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} remove={removeHandler}/>
		</div>
  )

}

export default App