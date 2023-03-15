import { combineReducers } from "redux";

const profile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.payload;
        default:
            return state;
    }
}

const profileEdit = (state = {}, action) =>{
    if (action.type === 'SET_PROFILE_TO_EDIT') {
        return action.payload;
    }
    if (action.type === 'FIRST_NAME_TO_EDIT') {
        return action.payload;
    }else if (action.type === 'SET_FIRST_NAME') {
        const newFirstNameValue = action.payload;
        return {...state, firstName: newFirstNameValue}
    }
    if (action.type === 'LAST_NAME_TO_EDIT') {
        return action.payload;
    }else if (action.type === 'SET_LAST_NAME') {
        const newLastNameValue = action.payload;
        return {...state, lastName: newLastNameValue}
    }
    if (action.type === 'DOB_TO_EDIT') {
        return action.payload;
    }else if (action.type === 'SET_DOB') {
        const newDobValue = action.payload;
        return {...state, dob: newDobValue}
    }
    if (action.type === 'PROFESSION_TO_EDIT') {
        return action.payload;
    }else if (action.type === 'SET_PROFRESSION') {
        const newProfessionValue = action.payload;
        return {...state, profression: newProfessionValue}
    }
    if (action.type === 'VIEW_AS_RENTER_TO_EDIT') {
        return action.payload;
    }else if (action.type === 'SET_VIEW_AS_RENTER') {
        const newViewAsRenterValue = action.payload;
        return {...state, viewAsRenter: newViewAsRenterValue}
    }
    return state;
}

const profileReducer = combineReducers({
    profile,
    profileEdit,
})

export default profileReducer;