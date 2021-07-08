import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad}) => {
  const votes = good + neutral + bad
  const average = ((good - bad) / votes).toFixed(1)
  const positive = (good / votes * 100).toFixed(1) + ' %'
  if (votes === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={votes} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h3>Give feedback</h3>
      
      <Button handleClick={() => setGood(good + 1)} text='good' /> 
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' /> 
      <Button handleClick={() => setBad(bad + 1)} text='bad' />

      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App