import { combineReducers } from "redux";

const files = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FILES':
            return action.payload;
        default:
            return state;
    }
}

const uploadedFiles = (state = [], action) => {
    switch (action.type) {
        case 'SET_UPLOADS':
            return action.payload;
        default:
            return state;
    }
}

const residencePhotos = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESIDENCE_PHOTOS':
            return action.payload;
        default: 
            return state;
    }
}

const photoReducer = combineReducers({
    files,
    uploadedFiles,
    residencePhotos
})

export default photoReducer;