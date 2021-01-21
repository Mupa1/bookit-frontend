/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment }) => {
  const {
    doctor_name, username, date, city,
  } = appointment;

  return (
    <tr>
      <td>{doctor_name}</td>
      <td>{username}</td>
      <td>{date}</td>
      <td>{city}</td>
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
};

export default Appointment;
