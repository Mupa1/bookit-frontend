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

export const getAppointments = appoints => ({
  type: 'GET_APPOINTMENT',
  payload: appoints,
});
