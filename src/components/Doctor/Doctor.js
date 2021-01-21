import React from 'react';
import PropTypes from 'prop-types';

import styles from './Doctor.module.css';

const Doctor = ({ doctor }) => {
  const { name, image, speciality } = doctor;

  const preventDrag = e => e.preventDefault();

  return (
    <div className="text-center" onDragStart={preventDrag}>
      <div className={styles.imgContainer}>
        <img src={image.url} alt={name} />
      </div>
      <h5 className="font-weight-bold">{name}</h5>
      <p>...........................</p>
      <p className={styles.speciality}>{speciality}</p>
      <p>Icons</p>
    </div>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.instanceOf(Object),
    speciality: PropTypes.string,
  }).isRequired,
};

export default Doctor;
