import React from 'react'
import { connect } from 'react-redux'
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

const Anecdotes = ({ anecdotes, vote, setNotification }) => {

  const handleClick = async anecdote => {
    vote(anecdote)
    setNotification(`you voted '${anecdote.content}'`, 3)
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

const mapStateToProps = state => {
  const show = (anecdote, filter) => anecdote.toLowerCase().includes(filter.toLowerCase())

  return (state.filter === '')
    ? { anecdotes: state.anecdotes }
    : { anecdotes: state.anecdotes.filter(a => show(a.content, state.filter)) }
}

const ConnectedAnecdotes = connect(mapStateToProps, { vote, setNotification })(Anecdotes)
export default ConnectedAnecdotes