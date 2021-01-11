import React from 'react';

import styles from './HomePage.module.css';

const Homepage = () => (
  <div className={styles.homeContainer}>
    <h1>BOOK AN APPOINTMENT</h1>
    <button type="button">Register</button>
    <button type="button">Login</button>
  </div>
);

export default Homepage;
