import React from 'react'
import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ create, setNotification }) => {

  const addAnecdote = async event => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    create(content)
    setNotification(`you added '${content}'`, 3)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(null, { create, setNotification })(AnecdoteForm)