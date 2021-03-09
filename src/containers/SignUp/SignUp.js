import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../../styles/Auth.module.css';
import { userRegistration } from '../../api';

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(null);
  const user = useSelector(state => state.user);

  const userObj = {
    user: {},
  };

  const handleSignUp = () => {
    history.push('/doctors');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(userRegistration(userObj))
      .then(() => {
        if (Object.keys(user).length > 0) {
          setIsLoaded(true);
          handleSignUp();
          e.target.reset();
          setError('');
        } else {
          setError('Email already in use or invalid details');
          e.target.reset();
        }
      });
  };

  useEffect(() => () => {
    setIsLoaded(false);
  }, [isLoaded]);

  const handleChange = e => {
    userObj.user = Object.assign(userObj.user, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.homeLink}>
        <Link to="/">Home</Link>
      </div>
      <div className={`${styles.formContainer} text-center`}>
        <form data-testid="form" onSubmit={handleSubmit}>
          <h3 data-testid="title" className="text-center">Register</h3>
          <h6 className="text-danger">{error}</h6>
          <div className="form-group">
            <label htmlFor="username">
              Name
              <input type="text" name="username" id="username" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <button type="submit" className="p-0 m-0">Submit</button>
          <div>
            Already have an account.
            {' '}
            <Link to="/signin">Sign in here.</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

SignUp.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default SignUp;
