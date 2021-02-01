import {
  fetchUser, destroyUser, fetchDoctors, setAppointment, getAppointments,
} from '../index';

const user = fetchUser();
const aUser = fetchUser('Mupa');
const logOut = destroyUser();
const doctors = fetchDoctors();
const bookAppointment = setAppointment();
const fetchAppointments = getAppointments();

describe('actions', () => {
  test('value of type on fetchUser should be LOGIN', () => {
    expect(user.type).toBe('LOGIN');
  });

  test('value of payload on fetchUser should be undefined', () => {
    expect(user.payload).toBe(undefined);
  });

  test('value of payload on fetchUser should not be null', () => {
    expect(user.payload).not.toBe(null);
  });

  test('value of payload on fetchUser should be Mupa', () => {
    expect(aUser.payload).toBe('Mupa');
  });

  test('value of type on destroyUser should be LOGOUT', () => {
    expect(logOut.type).toBe('LOGOUT');
  });

  test('value of type on fetchDoctors should be FETCH_DOCTORS', () => {
    expect(doctors.type).toBe('FETCH_DOCTORS');
  });

  test('value of payload on fetchDoctors should not be null', () => {
    expect(doctors.payload).not.toBe(null);
  });

  test('value of type on setAppointment should be SET_APPOINTMENT', () => {
    expect(bookAppointment.type).toBe('SET_APPOINTMENT');
  });

  test('value of payload on setAppointment should be undefined', () => {
    expect(bookAppointment.payload).toBe(undefined);
  });

  test('value of type on getAppointments should be GET_APPOINTMENT', () => {
    expect(fetchAppointments.type).toBe('GET_APPOINTMENT');
  });

  test('value of payload on getAppointments should be undefined', () => {
    expect(fetchAppointments.payload).toBe(undefined);
  });
});
