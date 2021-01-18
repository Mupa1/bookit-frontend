import React from 'react';
import PropTypes from 'prop-types';

import './AppointmentForm.css';

const AppointmentForm = ({
  handleClose, show, handleSubmit, handleChange, docName, uName, location, doctorId,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main text-center">
        <div className="close-btn">
          <button type="button" onClick={handleClose}>
            X
          </button>
        </div>
        <form data-testid="form" onSubmit={handleSubmit}>
          <h3 data-testid="title" className="text-center appoint-title">Book an appointment</h3>
          <div className="form-group">
            <label htmlFor="doctor_name">
              Doctor&apos;s Name
              <input type="text" name="doctor_name" id="doctor_name" className="form-control" value={docName} readOnly onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input type="text" name="username" id="username" className="form-control" value={uName} readOnly onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="date">
              Date
              <input type="date" name="date" id="date" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="location">
              City
              <input type="text" name="location" id="location" className="form-control" value={location} readOnly onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="doctor_id">
              <input type="text" name="doctor_id" id="doctor_id" className="form-control" value={doctorId} readOnly hidden onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="p-0 m-0 text-center">Submit</button>
        </form>
      </section>
    </div>
  );
};

AppointmentForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  docName: PropTypes.string.isRequired,
  uName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  doctorId: PropTypes.number.isRequired,
};

export default AppointmentForm;
