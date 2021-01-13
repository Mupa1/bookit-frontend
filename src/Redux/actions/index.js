export const fetchUser = user => ({
  type: 'LOGIN',
  payload: user,
});

export const destroyUser = user => ({
  type: 'LOGOUT',
  payload: user,
});
