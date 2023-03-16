import { combineReducers } from "redux";

const checkInDate = (state='', action) => {
    switch (action.type) {
        case 'SET_CHECK_IN':
            return action.payload;
        default: 
            return state;
    }
}

const checkOutDate = (state='', action) => {
    switch (action.type) {
        case 'SET_CHECK_OUT':
            return action.payload;
        default: 
            return state;
    }
}

const travelers = (state= 1, action) => {
    switch (action.type) {
        case 'SET_TRAVELERS':
            return action.payload;
        default: 
            return state;
    }
}

const hospital = (state='', action) => {
    switch (action.type) {
        case 'SET_HOSPITAL':
            return action.payload;
        default: 
            return state;
    }
}

const bookingReducer = combineReducers({
    checkInDate, 
    checkOutDate,
    travelers,
    hospital
})

export default bookingReducer;