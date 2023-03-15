const residenceDetailsReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_RESIDENCES_DETAILS':
          return action.payload
      default:
          return state
  }
}

export default residenceDetailsReducer;