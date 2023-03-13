const propertyDetailsReducer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_PROPERTY_DETAILS':
          return action.payload
      default:
          return state
  }
}

export default propertyDetailsReducer;