import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../../styles/Auth.module.css';
import { fetchUser } from '../../Redux/actions/index';

const SignUp = ({ user, fetchUser, history }) => {
  const [error, setError] = useState('');
  const userObj = {
    user: {},
  };

  const handleSignUp = () => {
    history.push('/doctors');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/v1/sign_up', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then(res => res.json())
      .then(data => {
        fetchUser(data.data.user);
        localStorage.setItem('token', data.data.user.authentication_token);
        if (Object.keys(user).length > 0) {
          handleSignUp();
          e.target.reset();
        }
      })
      .catch(err => {
        if (err) {
          e.target.reset();
          return `${err}: ${setError('Error: Email already exists or password mismatch!')}`;
        }
        return setError('');
      });
  };

  const handleChange = e => {
    userObj.user = Object.assign(userObj.user, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="container">
      <div className={styles.homeLink}>
        <Link to="/">Home</Link>
      </div>
      <div className={`${styles.formContainer} text-center`}>
        <form data-testid="form" onSubmit={handleSubmit}>
          <h3 data-testid="title" className="text-center">Register</h3>
          <h6 className="text-danger">{error}</h6>
          <div className="form-group">
            <label htmlFor="username">
              Username
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
          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm Password
              <input type="password" name="confirm-password" id="confirm-password" className="form-control" required onChange={handleChange} />
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

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  fetchUser: value => dispatch(fetchUser(value)),
});

SignUp.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
