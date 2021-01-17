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

export const setAppointment = appoint => ({
  type: 'SET APPOINTMENT',
  payload: appoint,
});

export const delAppointment = appoint => ({
  type: 'DEL APPOINTMENT',
  payload: appoint,
});
