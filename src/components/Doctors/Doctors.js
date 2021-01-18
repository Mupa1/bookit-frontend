import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .catch(error => (error));
    setDoctors(response.data.doctor);
  }, [setDoctors]);

  return (
    <Sidebar content={doctors.length ? (
      <ul>
        {doctors.map(doctor => (
          <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
            <li>
              <Doctor doctor={doctor} />
            </li>
          </Link>
        ))}
      </ul>
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
