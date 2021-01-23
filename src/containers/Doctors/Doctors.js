import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { fetchDoctors } from '../../Redux/actions/index';
import Doctor from '../../components/Doctor/Doctor';
import Sidebar from '../Sidebar/Sidebar';
import './Doctors.css';

const Doctors = ({ doctors, setDoctors, user }) => {
  useEffect(async () => {
    const response = await fetch('https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    }).then(res => res.json())
      .catch(error => (error));
    setDoctors(response.data.doctor);
  }, [setDoctors]);

  const resp = {
    0: { items: 1 },
    750: { items: 2 },
    1024: { items: 3 },
  };

  if (Object.keys(user).length === 0) { return <Redirect to="/" />; }

  return (
    <>
      <Sidebar />
      {doctors.length ? (
        <section className="content">
          <div className="text-center docs-title">
            <h2 className="font-weight-bold">OUR DOCTORS</h2>
            <p>Please select a doctor to book an appointment</p>
            <p>...........................</p>
          </div>
          <div>
            <AliceCarousel
              responsive={resp}
              autoPlayInterval={3200}
              autoPlayDirection="ltr"
              autoPlay
              fadeOutAnimation
              mouseTrackingEnabled
              disableAutoPlayOnAction
              dotsDisabled
              infinite
            >
              {doctors.map(doctor => (
                <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                  <div>
                    <Doctor doctor={doctor} />
                  </div>
                </Link>
              ))}
            </AliceCarousel>
          </div>
        </section>
      ) : (
        <section className="content text-center">
          <h4>Loading doctors...</h4>
        </section>
      )}
    </>
  );
};

Doctors.propTypes = {
  doctors: PropTypes.instanceOf(Array).isRequired,
  setDoctors: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  doctors: state.doctors,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setDoctors: doctors => dispatch(fetchDoctors(doctors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
