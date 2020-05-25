const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

export const setNotification = (notification, time) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(clearNotification())
    }, 1000 * time)

    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
  }
}

export default notificationReducer