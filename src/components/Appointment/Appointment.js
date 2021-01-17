import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, handleRemoveAppointment }) => {
  const {
    docName, username, date, city,
  } = appointment;

  return (
    <tr>
      <td>{docName}</td>
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
    docName: PropTypes.string,
    username: PropTypes.number,
    date: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  handleRemoveAppointment: PropTypes.func.isRequired,
};

export default Appointment;
