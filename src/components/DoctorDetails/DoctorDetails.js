import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AppointmentForm from '../AppointmentForm/AppointmentForm';
import Sidebar from '../Sidebar/Sidebar';
import { setAppointment } from '../../Redux/actions/index';
import styles from './DoctorDetails.module.css';

const DoctorDetails = ({
  match, setAppointment, user,
}) => {
  const [doctor, setDoctor] = useState(null);
  const [show, setShow] = useState(false);
  const appointmentObj = {
    appointment: {},
  };

  // const handleAppointments = () => {
  //   history.push('/appointments');
  // };

  useEffect(async () => {
    const id = match.params.doctor_id;
    const response = await fetch(`https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors/${id}`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    }).then(res => res.json())
      .catch(error => (error));
    setDoctor(response.data.doctor);
  }, [doctor]);

  const handleShowModal = () => {
    setShow(true);
  };

  const handleHideModal = () => {
    setShow(false);
  };

  const handleInputChange = e => {
    appointmentObj.appointment = Object.assign(appointmentObj.appointment, {
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    await fetch('https://bookit-doc-appointments-api.herokuapp.com/api/v1/appointments', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
      body: JSON.stringify(appointmentObj),
    })
      .then(res => res.json())
      .then(data => {
        setAppointment(data.data.appointment);
        console.log(data.data.appointment);
      })
      .catch(err => console.log(err));
  };

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }

  const preventDrag = e => e.preventDefault();
  return (
    <Sidebar content={
      doctor ? (
        <div>
          <div className="text-center row" onDragStart={preventDrag}>
            <div className={`${styles.imgContainer} col-md-8`}>
              <img src={doctor.image.url} alt={doctor.name} />
            </div>
            <div className={`${styles.leftNav} col-md-4`}>
              <h3>{doctor.name}</h3>
              <p>{doctor.speciality}</p>
              <p>Icons</p>
              <button type="button" className={styles.bookBtn} onClick={handleShowModal}>BOOK AN APPOINTMENT</button>
            </div>
          </div>
          <div>
            <AppointmentForm
              show={show}
              handleChange={handleInputChange}
              handleSubmit={handleFormSubmit}
              handleClose={handleHideModal}
              docName={doctor.name}
              uName={user.username}
              location={doctor.location}
              doctorId={doctor.id}
            />
          </div>
        </div>
      ) : (
        <div className="text-center">Loading doctor&apos;s details...</div>
      )
    }
    />
  );
};

DoctorDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      doctor_id: PropTypes.string,
    }),
  }).isRequired,
  setAppointment: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  // history: PropTypes.instanceOf(Object).isRequired,
  // appointment: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setAppointment: appointment => dispatch(setAppointment(appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);
