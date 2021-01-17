const appointmentReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET APPOINTMENT':
      return [...state, action.payload];
    case 'DEL APPOINTMENT':
      return [...state.filter(appointment => appointment.id !== action.payload)];
    default:
      return state;
  }
};

export default appointmentReducer;
