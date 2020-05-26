import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = ({ filterChange }) => {

  const handleChange = event => {
    filterChange(event.target.value)
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

export default connect(null, { filterChange })(Filter)