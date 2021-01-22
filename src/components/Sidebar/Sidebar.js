import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Sidebar.module.css';
import sideBarToggle from '../../dom/index';
import { destroyUser } from '../../Redux/actions/index';

const Sidebar = ({
  user, destroyUser, history,
}) => {
  const handleHomepage = () => {
    history.push('/homepage');
  };

  const handleLogOut = async () => {
    await fetch('https://bookit-doc-appointments-api.herokuapp.com/api/v1/log_out', {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(() => {
        destroyUser();
        handleHomepage();
        localStorage.clear();
      })
      .catch(err => err);
  };

  return (
    <>
      <button type="button" className={styles.toggler} onClick={sideBarToggle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="menu-icon" />
      </button>
      <section className={`${styles.sidebar} sidebar`}>
        <div className={`${styles.header} d-flex justify-content-start align-items-center`}>
          <img className={styles.userlogo} src="https://img.icons8.com/carbon-copy/24/000000/user-male-circle.png" alt="user" />
          {user.username}
        </div>
        {' '}
        <h3 className="pl-3 font-weight-bold">BookIT</h3>
        <NavLink activeClassName={styles.active} to="/doctors">DOCTORS</NavLink>
        <NavLink activeClassName={styles.active} to="/appointments">APPOINTMENTS</NavLink>
        <div className={styles.footer}>
          <div>
            <button className={styles.logout} type="button" onClick={handleLogOut}>LogOut</button>
          </div>
          {' '}
          <p className="d-flex">
            <img src="https://img.icons8.com/android/24/000000/twitter.png" alt="twitter-icon" />
            <img src="https://img.icons8.com/android/24/000000/facebook-new.png" alt="fb-icon" />
            <img src="https://img.icons8.com/android/24/000000/google-plus.png" alt="google-icon" />
            <img src="https://img.icons8.com/material/24/000000/vimeo.png" alt="vimeo-icon" />
            <img src="https://img.icons8.com/metro/24/000000/pinterest.png" alt="pinterest-icon" />
          </p>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  destroyUser: () => dispatch(destroyUser()),
});

Sidebar.propTypes = {
  destroyUser: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
