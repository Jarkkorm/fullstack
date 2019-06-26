import React from 'react'

const Person = ({ name, number, remove }) => (<li>{name}: {number} <button onClick={remove}>remove</button></li>)

export default Person