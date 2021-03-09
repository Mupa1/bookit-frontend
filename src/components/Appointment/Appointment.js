/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Appointment.module.css';

const Appointment = ({ appointment, handleClick, dataId }) => {
  const {
    doctor_name, username, date, city,
  } = appointment;

  return (
    <tr>
      <td>{doctor_name}</td>
      <td>{username}</td>
      <td>{moment.utc(date).format('LLL')}</td>
      <td>{city}</td>
      <td><button type="button" data-id={dataId} className={styles.button} onClick={handleClick}>Delete</button></td>
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
  handleClick: PropTypes.func.isRequired,
  dataId: PropTypes.number.isRequired,
};

export default Appointment;
