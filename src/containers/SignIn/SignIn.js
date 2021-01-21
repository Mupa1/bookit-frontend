import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../../styles/Auth.module.css';
import { fetchUser } from '../../Redux/actions/index';

const SignIn = ({ user, fetchUser, history }) => {
  const userObj = {
    sign_in: {},
  };

  const handleSignIn = () => {
    history.push('/doctors');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/v1/sign_in', {
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
          handleSignIn();
        }
      })
      .catch(err => err);
  };

  const handleChange = e => {
    userObj.sign_in = Object.assign(userObj.sign_in, {
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
          <h3 data-testid="title" className="text-center">Sign In</h3>
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
            Don&apos;t have an account.
            {' '}
            <Link to="/signup">Register here.</Link>
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

SignIn.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
