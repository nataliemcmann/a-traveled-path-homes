import { combineReducers } from "redux";

const ammenitiesArray = (state = [], action) => {
  switch (action.type) {
    case 'SET_AMENITIES_ARRAY':
      return action.payload;
    default:
      return state;
  }
}



const amenitiesReducer = combineReducers({
    ammenitiesArray
});


export default amenitiesReducer;