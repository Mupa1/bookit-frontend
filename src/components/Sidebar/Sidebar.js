import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

const Sidebar = () => (
  <>
    <section className={styles.sidebar}>
      <h3 className="pl-3 font-weight-bold">BookIT</h3>
      <NavLink activeClassName={styles.active} to="/doctors">DOCTORS</NavLink>
      <NavLink activeClassName={styles.active} to="/appointments">APPOINTMENTS</NavLink>
    </section>
  </>
);

export default Sidebar;
