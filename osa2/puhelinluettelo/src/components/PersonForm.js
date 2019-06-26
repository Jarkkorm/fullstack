import React from 'react'


const PersonForm = ({addPerson, newPerson, newNumber, handleNameChange, handleNumberChange, setMessage}) => {
    
    setMessage(
        ` '${newPerson}' lisätty`
    )
    setTimeout(() => {
        setMessage(null)
    }, 5000)

    return (
    <form onSubmit={addPerson()}>
    <div>
      name: <input 
        value={newPerson}
        onChange={handleNameChange()}
        />
    </div>
    <div>
      number: <input 
        value={newNumber}
        onChange={handleNumberChange()}
        />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
    </form>
    )
}

export default PersonForm