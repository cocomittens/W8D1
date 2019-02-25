const sessionReducer = (state = {id: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default: 
      return state;
  }
};

export default sessionReducer;