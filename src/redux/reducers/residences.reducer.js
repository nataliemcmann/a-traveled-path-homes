const residencesReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_RESIDENCES':
          return action.payload;
      default: 
          return state;
  }
};


export default residencesReducer;