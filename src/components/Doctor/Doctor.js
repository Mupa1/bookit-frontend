import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';

import styles from './Doctor.module.css';

const Doctor = ({ doctor }) => {
  const { name, image, speciality } = doctor;

  const preventDrag = e => e.preventDefault();

  return (
    <div className="text-center" onDragStart={preventDrag}>
      <div className={styles.imgContainer}>
        <img src={image.url} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>...........................</p>
      <p>{speciality}</p>
      <span>
        <SocialIcon url="http://linkedin.com/in/jaketrent" />
        <SocialIcon url="http://linkedin.com/in/jaketrent" />
        <SocialIcon url="http://linkedin.com/in/jaketrent" />
        <SocialIcon network="twitter" bgColor="#ff5a01" />
      </span>
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
