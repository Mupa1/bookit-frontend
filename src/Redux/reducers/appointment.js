const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_APPOINTMENT':
      return action.payload;
    case 'SET_APPOINTMENT':
      return [...state, action.payload];
    case 'DEL_APPOINTMENT':
      return [
        ...state,
      ].filter(ap => +ap.id !== +action.payload);
    default:
      return state;
  }
};

export default appointmentReducer;
