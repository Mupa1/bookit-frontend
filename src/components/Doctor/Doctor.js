import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => {
  const { name, image, speciality } = doctor;

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{speciality}</p>
      <p>Icons</p>
    </div>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    speciality: PropTypes.string,
  }).isRequired,
};

export default Doctor;
