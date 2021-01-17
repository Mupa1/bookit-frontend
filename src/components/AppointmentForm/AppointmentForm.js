import React from 'react';
import PropTypes from 'prop-types';

import './AppointmentForm.css';

const Modal = ({
  handleClose, show, handleSubmit, handleChange,
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
          <h3 data-testid="title" className="text-center">Book an appointment</h3>
          <div className="form-group">
            <label htmlFor="doctor-name">
              Doctor&apos;s Name
              <input type="text" name="doctor-name" id="doctor-name" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="doctor-id">
              Doctor Ref. No.
              <input type="number" name="doctor-id" id="doctor-id" className="form-control" required onChange={handleChange} />
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
              Location
              <input type="text" name="location" id="location" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="p-0 m-0 text-center">Submit</button>
        </form>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Modal;
