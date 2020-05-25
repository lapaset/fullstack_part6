import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const show = (anecdote, filter) => anecdote.toLowerCase().includes(filter.toLowerCase())

    if (filter === '')
      return anecdotes
    return anecdotes.filter(a => show(a.content, filter))
  })

  const dispatch = useDispatch()

  const handleClick = async anecdote => {
    dispatch(vote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 3))
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(a =>
          <Anecdote
            key={a.id}
            anecdote={a}
            handleClick={() => handleClick(a)} />
      )}
    </div>
  )
}

export default Anecdotes