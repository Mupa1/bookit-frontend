export const fetchUser = user => ({
  type: 'LOGIN',
  payload: user,
});

export const destroyUser = user => ({
  type: 'LOGOUT',
  payload: user,
});

export const fetchDoctors = doctors => ({
  type: 'FETCH DOCTORS',
  payload: doctors,
});
