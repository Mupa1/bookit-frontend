import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../Sidebar/Sidebar';
import styles from './DoctorDetails.module.css';
import { fetchADoctor, bookAppointment } from '../../api';

const DoctorDetails = ({
  match, history,
}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [doctor, setDoctor] = useState(null);
  const [data, setData] = useState({
    doctor_name: '',
    city: '',
    username: '',
    doctor_id: '',
    user_id: '',
    date: '',
  });

  const handleChange = e => {
    setData({
      [e.target.name]: e.target.value,
      doctor_name: doctor.name,
      city: doctor.location,
      username: user.username,
      doctor_id: doctor.id,
      user_id: user.id,
    });
  };

  useEffect(() => {
    const id = match.params.doctor_id;
    fetchADoctor(id, setDoctor);
  }, []);

  const handleAppointments = () => {
    history.push('/appointments');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(bookAppointment(data));
    handleAppointments();
    setData({
      doctor_name: '',
      city: '',
      username: '',
      doctor_id: '',
      user_id: '',
      date: '',
    });
  };

  const preventDrag = e => e.preventDefault();
  return (
    <>
      <Sidebar />
      {doctor ? (
        <section className="content">
          <div className="text-center row" onDragStart={preventDrag}>
            <div className={`${styles.imgContainer} col-md-8`}>
              <img src={doctor.image.url} alt={doctor.name} />
            </div>
            <div className={`${styles.leftNav} col-md-4`}>
              <h3 className={`${styles.name} font-weight-bold`}>{doctor.name}</h3>
              <p>{doctor.speciality}</p>
              <div>
                <section className="modal-main text-center">
                  <form data-testid="form" onSubmit={handleSubmit}>
                    <h5 data-testid="title" className="text-center appoint-title pt-3">BOOK AN APPOINTMENT</h5>
                    <div className="form-group m-0">
                      <label htmlFor="doctor_id">
                        <input type="text" name="doctor_id" id="doctor_id" className="form-control" value={doctor.id} readOnly hidden />
                      </label>
                    </div>
                    <div className="form-group m-0">
                      <label htmlFor="user_id">
                        <input type="text" name="user_id" id="user_id" className="form-control" value={user.id} readOnly hidden />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="doctor_name">
                        Doctor&apos;s Name
                        <input type="text" name="doctor_name" id="doctor_name" className="form-control" value={doctor.name} readOnly />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">
                        Username
                        <input type="text" name="username" id="username" className="form-control" value={user.username} readOnly />
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
                        <input type="text" name="city" id="city" className="form-control" value={doctor.location} readOnly />
                      </label>
                    </div>
                    <button type="submit" className={`${styles.submit} p-0 m-0 text-center`}>Submit</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-center content">
          <h4>Loading doctor&apos;s details...</h4>
        </section>
      )}
    </>
  );
};

DoctorDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      doctor_id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorDetails;
