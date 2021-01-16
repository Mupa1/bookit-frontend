import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DoctorDetails = ({ match }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(async () => {
    const id = match.params.doctor_id;
    const response = await fetch(`https://bookit-doc-appointments-api.herokuapp.com/api/v1/doctors/${id}`, {
      mode: 'cors',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    }).then(res => res.json())
      .catch(error => (error));
    setDoctor(response.data.doctor);
  }, []);

  const preventDrag = e => e.preventDefault();
  return (
    doctor ? (
      <div className="text-center" onDragStart={preventDrag}>
        <div>
          <img src={doctor.image.url} alt={doctor.name} />
        </div>
        <h3>{doctor.name}</h3>
        <p>{doctor.speciality}</p>
        <p>Icons</p>
      </div>
    ) : (
      <div className="text-center">Loading doctor&apos;s details...</div>
    )
  );
};

DoctorDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      doctor_id: PropTypes.string,
    }),
  }).isRequired,
};

export default DoctorDetails;
