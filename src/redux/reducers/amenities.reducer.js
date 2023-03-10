import { combineReducers } from "redux";

const amenitiesArray = (state = [], action) => {
  switch (action.type) {
    case 'SET_AMENITIES':
      return action.payload;
    default:
      return state;
  }
}



const amenitiesReducer = combineReducers({
    amenitiesArray
});


export default amenitiesReducer;