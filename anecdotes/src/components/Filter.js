import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'


const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = event => {
    dispatch(filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <form style={style} >
      filter
      <input onChange={handleChange} />
    </form>
  )
} 

export default Filter