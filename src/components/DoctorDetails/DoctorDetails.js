import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../AppointmentForm/AppointmentForm';

const DoctorDetails = ({ match }) => {
  const [doctor, setDoctor] = useState(null);
  const [show, setShow] = useState(false);

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

  const handleShowModal = () => {
    setShow(true);
  };

  const handleHideModal = () => {
    setShow(false);
  };

  const handleInputChange = () => {
    console.log('check me, for inputs! yei!!');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  const preventDrag = e => e.preventDefault();
  return (
    doctor ? (
      <section>
        <div className="text-center" onDragStart={preventDrag}>
          <div>
            <img src={doctor.image.url} alt={doctor.name} />
          </div>
          <h3>{doctor.name}</h3>
          <p>{doctor.speciality}</p>
          <p>Icons</p>
        </div>
        <div>
          <Modal
            show={show}
            handleChange={handleInputChange}
            handleSubmit={handleFormSubmit}
            handleClose={handleHideModal}
          />
          <button type="button" onClick={handleShowModal}>BOOK AN APPOINTMENT</button>
        </div>
      </section>
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
