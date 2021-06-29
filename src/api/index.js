import * as action from '../Redux/actions';

const baseUrl = 'https://bookit-doc-appointments-api.herokuapp.com/api/v1';

export const userRegistration = userObj => async dispatch => {
  await fetch(`${baseUrl}/sign_up`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.data.token);
      dispatch(action.fetchUser(data.data.user));
    });
};

export const userLogin = userObj => async dispatch => {
  await fetch(`${baseUrl}/sign_in`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.data.token);
      dispatch(action.fetchUser(data.data.user));
    });
};

export const signOut = () => async dispatch => {
  await fetch(`${baseUrl}/log_out`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(() => {
      dispatch(action.destroyUser());
    });
};

export const fetchAllDoctors = () => async dispatch => {
  await fetch(`${baseUrl}/doctors`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
    .then(data => {
      dispatch(action.fetchDoctors(data.data.doctor));
    });
};

export const fetchADoctor = async (id, setDoctor) => {
  await fetch(`${baseUrl}/doctors/${id}`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
    .then(data => {
      setDoctor(data.data.doctor);
    })
    .catch(error => (error));
};

export const bookAppointment = data => async dispatch => {
  await fetch(`${baseUrl}/appointments`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => {
      dispatch(action.setAppointment(data.data.appointment));
    });
};

export const fetchAppointments = () => async dispatch => {
  await fetch(`${baseUrl}/appointments`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(res => res.json())
    .then(data => {
      dispatch(action.getAppointments(data.data.appointment));
    });
};

export const deleteAppointments = id => async dispatch => {
  await fetch(`${baseUrl}/appointments/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then(() => {
    dispatch(action.destroyAppointments(id));
  });
};
