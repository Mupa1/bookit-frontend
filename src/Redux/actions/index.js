export const fetchUser = user => ({
  type: 'LOGIN',
  payload: user,
});

export const destroyUser = user => ({
  type: 'LOGOUT',
  payload: user,
});

export const fetchDoctors = doctors => ({
  type: 'FETCH_DOCTORS',
  payload: doctors,
});

export const setAppointment = appoint => ({
  type: 'SET_APPOINTMENT',
  payload: appoint,
});

export const delAppointment = appoint => ({
  type: 'DEL_APPOINTMENT',
  payload: appoint,
});
