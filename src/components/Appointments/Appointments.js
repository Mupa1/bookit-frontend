import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Appointment from '../Appointment/Appointment';
import Sidebar from '../Sidebar/Sidebar';
import { getAppointments, delAppointment } from '../../Redux/actions/index';

const Appointments = ({
  appointment, getAppointments, delAppointment, user,
}) => {
  useEffect(async () => {
    await fetch('http://localhost:3001/api/v1/appointments', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    }).then(res => res.json())
      .then(data => getAppointments(data.data.appointment))
      .catch(error => (error));
  }, []);

  const handleRemoveAppointment = appointment => {
    delAppointment(appointment);
  };

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }

  return (
    <Sidebar content={appointment ? (
      <>
        <h3>Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>Doctor&apos;s Name</th>
              <th>Username</th>
              <th>Date</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map(appoint => (
              <Appointment
                key={appoint.id}
                appointment={appoint}
                handleRemoveAppointment={handleRemoveAppointment}
              />
            ))}
          </tbody>
        </table>
      </>
    ) : (
      <h3 className="text-center">No appointments yet!</h3>
    )}
    />
  );
};

Appointments.propTypes = {
  appointment: PropTypes.arrayOf(PropTypes.object).isRequired,
  delAppointment: PropTypes.func.isRequired,
  getAppointments: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getAppointments: appointment => {
    dispatch(getAppointments(appointment));
  },
  delAppointment: appointment => {
    dispatch(delAppointment(appointment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
