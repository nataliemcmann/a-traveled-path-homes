import { combineReducers } from "redux";

const review = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REVIEW':
            return action.payload;
        default:
            return state;
    }
}

const reviewReducer = combineReducers({
    review
})

export default reviewReducer;