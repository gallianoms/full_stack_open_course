import { useState } from 'react'

/* eslint-disable react/prop-types */
const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good + neutral + bad} />
            <StatisticLine
              text='average'
              value={((good + neutral + bad) / 3).toFixed(2)}
            />
            <StatisticLine
              text='positive'
              value={((good / (good + neutral + bad)) * 100)
                .toFixed(2)
                .concat('%')}
            />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
