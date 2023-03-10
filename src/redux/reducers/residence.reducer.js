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

  const editResidence = (state = {}, action) =>{
    if(action.type === 'HOUSE_TYPE_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_HOUSE_TYPE') {
      const newHouseTypeValue = action.payload;
      return {...state, houseType: newHouseTypeValue}
    }
    if(action.type === 'PROPERTY_NAME_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_PROPERTY_NAME') {
      const newPropertyNameValue = action.payload;
      return {...state, propertyName: newPropertyNameValue}
    }
    if(action.type === 'DESCRIPTION_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_DESCRIPTION') {
      const newDescriptionValue = action.payload;
      return {...state, description: newDescriptionValue}
    }
    if(action.type === 'ADDRESS_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_ADDRESS') {
      const newAddressValue = action.payload;
      return {...state, address: newAddressValue}
    }
    if(action.type === 'MAX_GUESTS_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_MAX_GUESTS') {
      const newMaxGuestsValue = action.payload;
      return {...state, maxGuests: newMaxGuestsValue}
    }
    if(action.type === 'BEDROOMS_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_BEDROOMS') {
      const newBedroomsValue = action.payload;
      return {...state, bedrooms: newBedroomsValue}
    }
    if(action.type === 'BEDS_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_BEDS') {
      const newBedsValue = action.payload;
      return {...state, beds: newBedsValue}
    }
    if(action.type === 'BATHROOMS_TO_EDIT') {
      return action.payload;
    }else if (action.type === 'SET_BATHROOMS') {
      const newBathroomsvalue = action.payload;
      return {...state, bathrooms: newBathroomsvalue}
    }
    return state;
  }
const propertyReducer = combineReducers({
    residence,
    propertyDescription,
    editResidence,
});

  
  export default propertyReducer;