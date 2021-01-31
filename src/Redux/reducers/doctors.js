const initialState = {
  doctors: [],
  isLoading: false,
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOCTORS':
      return {
        ...state,
        isLoading: false,
        doctors: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
