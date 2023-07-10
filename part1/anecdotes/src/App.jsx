/* eslint-disable react/prop-types */
import { useState } from 'react'

const rdm = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function App({ anecdotes }) {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button
        onClick={() =>
          setVote(vote.map((vote, idx) => (idx === selected ? vote + 1 : vote)))
        }
      >
        vote
      </button>
      <button
        onClick={() => {
          setSelected(rdm(0, anecdotes.length - 1))
        }}
      >
        next anecdote
      </button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      <p>has {vote[vote.indexOf(Math.max(...vote))]} votes</p>
    </div>
  )
}

export default App
