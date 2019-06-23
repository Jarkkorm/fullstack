import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
            <h1>{props.header}</h1>
        </>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => (<div>{props.text} {props.value}</div>)

const Statistics = (props) => {
    if (props.good+props.neutral+props.bad === 0) {
        return (
            <div>No feedback given </div>
        )
    }
    return (
        <div>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={props.good + props.neutral + props.bad} />
            <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
            <Statistic text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100} />
        </div>
    )      
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = newGood => {setGood(newGood)}
  const setToNeutral = newNeutral => {setNeutral(newNeutral)}
  const setToBad = newBad => {setBad(newBad)}
  const header1 = 'give feedback'
  const header2 = 'statistics'

  return (
    <div>
        <Header header = {header1} />
        <Button handleClick={() => setToGood(good+1)} text="good" />
        <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
        <Button handleClick={() => setToBad(bad+1)} text="bad" />
        <Header header = {header2} />
        <Statistics good={good} neutral={neutral} bad={bad} />
</div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
