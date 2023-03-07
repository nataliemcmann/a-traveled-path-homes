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

  const propertyDescription = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROPERTY_DESCRIPTION':
        return action.payload;
      case 'UNSET_PROPERTY_DESCRIPTION':
        return [];
      default:
        return state;
    }
  }
const propertyReducer = combineReducers({
    residence,
    propertyDescription,
});

  
  export default propertyReducer;