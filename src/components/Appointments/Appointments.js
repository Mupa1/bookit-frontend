import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Appointment from '../Appointment/Appointment';
import Sidebar from '../Sidebar/Sidebar';
import { delAppointment } from '../../Redux/actions/index';

const Appointments = ({ appointments, delAppointment }) => {
  const handleRemoveAppointment = appointment => {
    delAppointment(appointment);
  };

  return (
    <Sidebar content={(
      <>
        <h1>Appointments</h1>
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
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                handleRemoveAppointment={handleRemoveAppointment}
              />
            ))}
          </tbody>
        </table>
      </>
    )}
    />
  );
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
  delAppointment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ appointments: state.appointments });

const mapDispatchToProps = dispatch => ({
  delAppointment: appointment => {
    dispatch(delAppointment(appointment));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
