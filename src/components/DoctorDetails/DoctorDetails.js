import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import { setAppointment } from '../../Redux/actions/index';
import styles from './DoctorDetails.module.css';

const DoctorDetails = ({
  match, setAppointment, user,
}) => {
  const [doctor, setDoctor] = useState(null);
  const appointmentObj = {
    appointment: {},
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

  const handleChange = e => {
    appointmentObj.appointment = Object.assign(appointmentObj.appointment, {
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    console.log(appointmentObj);
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
      .then(res => {
        console.log(res);
        setAppointment(res.data.appointment);
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
              <div>
                <section className="modal-main text-center">
                  <form data-testid="form" onSubmit={handleSubmit}>
                    <h3 data-testid="title" className="text-center appoint-title">Book an appointment</h3>
                    <div className="form-group">
                      <label htmlFor="doctor_name">
                        Doctor&apos;s Name
                        <input type="text" name="doctor_name" id="doctor_name" className="form-control" value={doctor.name} readOnly onChange={handleChange} />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">
                        Username
                        <input type="text" name="username" id="username" className="form-control" value={user.username} readOnly onChange={handleChange} />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">
                        Date
                        <input type="date" name="date" id="date" className="form-control" required onChange={handleChange} />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">
                        City
                        <input type="text" name="city" id="city" className="form-control" value={doctor.location} readOnly onChange={handleChange} />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="doctor_id">
                        <input type="text" name="doctor_id" id="doctor_id" className="form-control" value={doctor.id} readOnly hidden onChange={handleChange} />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_id">
                        <input type="text" name="user_id" id="user_id" className="form-control" value={user.id} readOnly hidden onChange={handleChange} />
                      </label>
                    </div>
                    <button type="submit" className="p-0 m-0 text-center">Submit</button>
                  </form>
                </section>
              </div>
            </div>
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
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setAppointment: appointment => dispatch(setAppointment(appointment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);
