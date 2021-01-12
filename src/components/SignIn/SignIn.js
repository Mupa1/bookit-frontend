import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Auth.module.css';

const SignIn = () => (
  <section className="container">
    <div className={styles.homeLink}>
      <Link to="/">Home</Link>
    </div>
    <div className={`${styles.formContainer} text-center`}>
      <form data-testid="form">
        <h3 className="text-center">Sign In</h3>
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
        <button type="submit" className="p-0 m-0">Submit</button>
        <div>
          Don&apos;t have an account.
          {' '}
          <Link to="/signup">Register here.</Link>
        </div>
      </form>
    </div>
  </section>
);

export default SignIn;
