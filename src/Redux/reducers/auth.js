const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign(state, action.payload);
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default authReducer;
