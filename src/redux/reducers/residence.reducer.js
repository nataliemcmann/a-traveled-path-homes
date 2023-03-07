const residenceReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESIDENCE':
        return action.payload;
      case 'UNSET_RESIDENCE':
        return [];
      default:
        return state;
        
    }
  };
  
  export default residenceReducer;