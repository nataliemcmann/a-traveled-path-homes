const propertyGalleryReducer = (state = [], action) => {
  switch (action.type) {
      case 'SET_PROPERTY':
          return action.payload;
      default: 
          return state;
  }
};


export default propertyGalleryReducer;