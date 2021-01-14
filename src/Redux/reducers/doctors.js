const doctorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH DOCTORS':
      return action.payload;
    default:
      return state;
  }
};

export default doctorsReducer;
