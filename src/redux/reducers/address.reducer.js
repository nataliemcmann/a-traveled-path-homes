import { combineReducers } from "redux";

const residence = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESIDENCE':
        return action.payload;
      case 'UNSET_RESIDENCE':
        return [];
      default:
        return state;
    }
  }

  const propertyAddress = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROPERTY_ADDRESS':
        return action.payload;
      case 'UNSET_PROPERTY_ADDRESS':
        return [];
      default:
        return state;
    }
  }
const addressReducer = combineReducers({
    residence,
    propertyAddress,
});

  
  export default addressReducer;