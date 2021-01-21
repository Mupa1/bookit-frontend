import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';
import sideBarToggle from '../../dom/index';

const Sidebar = () => (
  <>
    <button type="button" className={styles.toggler} onClick={sideBarToggle}>
      <img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="menu-icon" />
    </button>
    <section className={`${styles.sidebar} sidebar`}>
      <h3 className="pl-3 font-weight-bold">BookIT</h3>
      <NavLink activeClassName={styles.active} to="/doctors">DOCTORS</NavLink>
      <NavLink activeClassName={styles.active} to="/appointments">APPOINTMENTS</NavLink>
      <div className={styles.footer}>
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

export default Sidebar;
