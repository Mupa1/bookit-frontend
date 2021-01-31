const initialState = {
  appointments: [],
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_APPOINTMENT':
      return {
        ...state,
        appointments: action.payload,
      };
    case 'SET_APPOINTMENT':
      return {
        ...state,
        appointments: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
