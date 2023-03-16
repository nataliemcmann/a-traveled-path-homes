import { combineReducers } from "redux";

const checkInDate = (state='', action) => {
    switch (action.type) {
        case 'SET_CHECK-IN':
            return action.payload;
        default: 
            return state;
    }
}

const checkOutDate = (state='', action) => {
    switch (action.type) {
        case 'SET_CHECK-OUT':
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

const bookingReducer = combineReducers({
    checkInDate, 
    checkOutDate,
    travelers
})

export default bookingReducer;