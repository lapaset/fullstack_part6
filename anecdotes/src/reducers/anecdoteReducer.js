import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {

  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state
        .map(a => a.id !== id ? a : changedAnecdote)
    }
    case 'ADD':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update({ 
      ...anecdote,
      votes: anecdote.votes + 1 
    })

    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const create = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote,
    })
  }
}

export const initialize = anecdotes => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
  }
}

export default reducer