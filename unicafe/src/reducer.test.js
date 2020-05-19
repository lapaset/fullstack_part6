import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'
import { createStore } from 'redux'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('multiple values are incremented', () => {
    const store = createStore(counterReducer)
    const state = initialState

    deepFreeze(state)
    store.dispatch({ type: 'GOOD' })
    store.dispatch({ type: 'GOOD' })
    store.dispatch({ type: 'BAD' })
    store.dispatch({ type: 'GOOD' })
    store.dispatch({ type: 'OK' })
    store.dispatch({ type: 'OK' })

    const storeNow = store.getState()
    expect(storeNow).toEqual({
      good: 3,
      ok: 2,
      bad: 1
    })
  })

  test('zero makes all the values 0', () => {
    const store = createStore(counterReducer)
    const state = initialState

    deepFreeze(state)
    store.dispatch({ type: 'GOOD' })
    store.dispatch({ type: 'BAD' })
    store.dispatch({ type: 'OK' })
    store.dispatch({ type: 'ZERO' })

    const storeNow = store.getState()
    expect(storeNow).toEqual({
      good: 0,
      ok: 0,
      bad: 0
    })   
  })
})