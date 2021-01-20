/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, handleRemoveAppointment }) => {
  const {
    doctor_name, username, date, city,
  } = appointment;

  return (
    <tr>
      <td>{doctor_name}</td>
      <td>{username}</td>
      <td>{date}</td>
      <td>{city}</td>
      <td>
        <button type="button" onClick={() => handleRemoveAppointment(appointment)}>Delete</button>
      </td>
    </tr>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    doctor_name: PropTypes.string,
    username: PropTypes.string,
    date: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  handleRemoveAppointment: PropTypes.func.isRequired,
};

export default Appointment;
