import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDoctors } from '../../Redux/actions/index';
import Doctor from '../Doctor/Doctor';
import Sidebar from '../Sidebar/Sidebar';

const Doctors = ({ doctors, setDoctors }) => {
  useEffect(async () => {
    const response = await fetch('https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors', {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
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

  return (
    <Sidebar content={doctors.length ? (
      <>
        <div className="text-center">
          <h3 className="font-weight-bold">OUR DOCTORS</h3>
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
      </>
    ) : (
      <div className="text-center">Loading doctors...</div>
    )}
    />
  );
};

Doctors.propTypes = {
  doctors: PropTypes.instanceOf(Array).isRequired,
  setDoctors: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  doctors: state.doctors,
});

const mapDispatchToProps = dispatch => ({
  setDoctors: doctors => dispatch(fetchDoctors(doctors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
