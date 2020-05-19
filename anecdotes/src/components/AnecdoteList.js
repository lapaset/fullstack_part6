import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => (
  <div key={anecdote.id}>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
)

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(a =>
          <Anecdote
            key={a.id}
            anecdote={a}
            handleClick={() => dispatch(vote(a.id))} />
      )}
    </div>
  )
}

export default Anecdotes