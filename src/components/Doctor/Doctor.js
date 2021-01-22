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
      <p className={styles.dots}>...........................</p>
      <p className={styles.speciality}>{speciality}</p>
      <p className={`${styles.docIcons} d-flex justify-content-center`}>
        <img src="https://img.icons8.com/dotty/50/A6A6A6/facebook-circled.png" alt="facebook" />
        <img src="https://img.icons8.com/dotty/50/A6A6A6/twitter-circled.png" alt="twitter" />
        <img src="https://img.icons8.com/dotty/50/A6A6A6/google-plus.png" alt="google" />
      </p>
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
