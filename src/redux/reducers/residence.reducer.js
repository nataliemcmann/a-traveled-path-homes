import { combineReducers } from "redux";

const residence = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESIDENCE':
        return action.payload;
      case 'SET_HOUSE_TYPE':
        return {...state, houseType: action.payload};
      case 'SET_PROPERTY_NAME':
        return {...state, propertyName: action.payload};
      case 'SET_DESCRIPTION':
        return {...state, description: action.payload};
      case 'SET_ADDRESS':
        return {...state, address: action.payload};
      case 'SET_MAX_GUESTS':
        return {...state, maxGuests: action.payload};
      case 'SET_BEDROOMS':
        return {...state, bedrooms: action.payload};
      case 'SET_BEDS':
        return {...state, beds: action.payload};
      case 'SET_BATHROOMS':
        return {...state, bathrooms: action.payload};
      case 'SET_LISTED':
        return {...state, listed: action.payload};
      case 'SET_FEATURE_PHOTO':
        return {...state, photo: action.payload};
      case 'SET_MIN_STAY_LENGTH':
        return {...state, minStayLength: action.payload};
      case 'SET_PRICE_DAILY':
        return {...state, priceDaily: action.payload};
      case 'SET_PRICE_MONTHLY':
        return {...state, priceDaily: action.payload};
      default:
        return state;
    }
  }

const propertyReducer = combineReducers({
    residence
});

  
  export default propertyReducer;