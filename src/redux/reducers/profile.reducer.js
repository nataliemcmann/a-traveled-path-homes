import { combineReducers } from "redux";

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.payload;
        default:
            return state;
    }
}

const profileReducer = combineReducers({
    profile
})

export default profileReducer;