import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AppointmentForm from '../AppointmentForm/AppointmentForm';
import Sidebar from '../Sidebar/Sidebar';
import { setAppointment } from '../../Redux/actions/index';

const DoctorDetails = ({
  match, appointment, setAppointment, user, history,
}) => {
  const [doctor, setDoctor] = useState(null);
  const [show, setShow] = useState(false);
  const appointmentObj = {
    appointment: {},
  };

  const handleAppointments = () => {
    history.push('/appointments');
  };

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
    // console.log(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const id = match.params.doctor_id;
    await fetch(`https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors/${id}/appointments`, {
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
        console.log(data);
        if (Object.keys(appointment).length > 0) {
          handleAppointments();
        }
      })
      .catch(err => console.log(err));
    handleAppointments();
  };

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }

  const preventDrag = e => e.preventDefault();
  return (
    <Sidebar content={
      doctor ? (
        <section>
          <div className="text-center" onDragStart={preventDrag}>
            <div>
              <img src={doctor.image.url} alt={doctor.name} />
            </div>
            <h3>{doctor.name}</h3>
            <p>{doctor.speciality}</p>
            <p>Icons</p>
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
            />
            <button type="button" onClick={handleShowModal}>BOOK AN APPOINTMENT</button>
          </div>
        </section>
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
  history: PropTypes.instanceOf(Object).isRequired,
  appointment: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setAppointment: appointment => dispatch(setAppointment(appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);
