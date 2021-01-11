import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './SignUp.module.css';

const SignUp = ({ handleSignUpSubmit }) => (
  <div className={styles.formContainer}>
    <form data-testid="form" onSubmit={handleSignUpSubmit}>
      <h3 className="text-center">Register</h3>
      <div className="form-group">
        <label htmlFor="email">
          Email
          <input type="email" name="email" id="email" className="form-control" required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" className="form-control" required />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">
          Confirm Password
          <input type="confirm-password" name="confirm-password" id="confirm-password" className="form-control" required />
        </label>
      </div>
      <div className="m-auto">
        <button type="submit" className="p-0 m-0">Submit</button>
      </div>
    </form>
  </div>

);

SignUp.propTypes = {
  handleSignUpSubmit: PropTypes.func.isRequired,
};

export default SignUp;
