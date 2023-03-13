
  const address = (state = {}, action) => {
    switch (action.type) {
      case 'SET_PROPERTY_ADDRESS':
        return action.payload;
      case 'SET_STREET':
        return {...state, street: action.payload};
      case 'SET_APARTMENT':
        return {...state, apartment: action.payload};
      case 'SET_CITY':
        return {...state, city: action.payload};
      case 'SET_STATE':
        return {...state, state: action.payload};
      case 'SET_ZIP':
        return {...state, zip: action.payload};
      default:
        return state;
    }
  }
  
  export default address;