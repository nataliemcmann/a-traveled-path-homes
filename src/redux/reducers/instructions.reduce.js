const instructionsReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCH_INSTRUCTIONS':
            return action.payload;
        case 'SET_PROFILE':
            return action.payload;
        default: 
            return state;
    }
}

export default instructionsReducer;