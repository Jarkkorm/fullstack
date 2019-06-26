import React from 'react'

const Part = ({ name, exercises }) => {
	return (
		<p>
        	{name} {exercises}
	    </p>
	)
}

const Total = ({ course }) => {
	const parts = course.parts
	const exercises = parts.map( part => part.exercises ).reduce( (sum, currentValue) => sum + currentValue )
	return (
		<p>Total {exercises} exercises</p>
	)
}

const Header = (props) => {
	return (
		<h1>{props.course.name}</h1>
	)
}

const Content = ({course}) => {
	const parts = course.parts
	const rows  = () => parts.map(part =>
		<Part
			key={part.id}
			name={part.name}
			exercises={part.exercises}
		/>
	)
	return (
		<>
		{rows()}
		</>
	)
}

const Course = ({course}) => {
	return (
		<div>
		  <Header course={course} />
		  <Content course={course} />
		  <Total course={course} />
		</div>
	)
}

export default Course