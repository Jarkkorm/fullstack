
import React from 'react'

const PersonForm = ({submitEvent, nameValue, nameChange, numberValue, numberChange}) => {
	return (
		<form
		onSubmit={submitEvent}>
		<div>
			Name:
			<input
				value={nameValue}
				onChange={nameChange}
			/>
		</div>
		<div>
			Number:
			<input
				value={numberValue}
				onChange={numberChange}
			/>
		</div>
		<div>
			<button type="submit">Add</button>
		</div>
		</form>
	)
}

export default PersonForm