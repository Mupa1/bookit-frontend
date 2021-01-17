import React from 'react';
import PropTypes from 'prop-types';

import './AppointmentForm.css';

const AppointmentForm = ({
  handleClose, show, handleSubmit, handleChange, docName, uName,
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
            <label htmlFor="doctorName">
              Doctor&apos;s Name
              <input type="text" name="doctorName" id="doctorName" className="form-control" value={docName} readOnly required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input type="text" name="username" id="username" className="form-control" value={uName} readOnly required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="date">
              Date
              <input type="date" name="date" id="date" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="city">
              City
              <input type="text" name="city" id="city" className="form-control" required onChange={handleChange} />
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
};

export default AppointmentForm;
