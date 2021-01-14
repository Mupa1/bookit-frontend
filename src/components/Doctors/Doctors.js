import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchDoctors } from '../../Redux/actions/index';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ doctors, setDoctors }) => {
  const getDoctors = set => {
    fetch('https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(res => set(res.data.doctor))
      .catch(error => (error));
  };
  useEffect(() => {
    getDoctors(setDoctors);
  }, [setDoctors]);

  return (
    doctors.length ? (
      <div>
        <ul>
          {doctors.map(doctor => (
            <li key={doctor.id}>
              <Doctor doctor={doctor} />
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>No Doctors Found!</div>
    )
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
