import React from 'react'
import Course from './components/course'

const App = () => {
	const courses = [
		{
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
			]
	  },
		  {
			name: 'Node.js',
			parts: [
			  {
				name: 'Routing',
				exercises: 3,
				id: 1
			  },
			  {
				name: 'Middlewaret',
				exercises: 8,
				id: 2
			  }
			]
		  }
		]

	const rows = () => courses.map(course =>
		<Course
			key={course.id}
			course={course}
		/>
	)
	return (
		<div>
			<h1>Web development curriculum</h1>
			{rows()}
		</div>
	)
}

export default App