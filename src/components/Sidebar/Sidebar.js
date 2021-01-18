import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

const Sidebar = ({ content }) => (
  <>
    <section className={styles.sidebar}>
      <h3 className="pl-3">BookIT</h3>
      <NavLink activeClassName={styles.active} to="/doctors">DOCTORS</NavLink>
      <NavLink activeClassName={styles.active} to="/appointments">APPOINTMENTS</NavLink>
    </section>
    <section className={styles.content}>
      {content}
    </section>
  </>
);

Sidebar.propTypes = {
  content: PropTypes.instanceOf(Object).isRequired,
};

export default Sidebar;
