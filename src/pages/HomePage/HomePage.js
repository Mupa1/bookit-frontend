import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => (
  <section className={styles.homeContainer}>
    <h1>BOOK AN APPOINTMENT</h1>
    <button type="button">
      <Link to="/signin" className="text-white">Sign In</Link>
    </button>
    <button type="button">
      <Link to="/signup" className="text-white">Register</Link>
    </button>
  </section>
);
export default HomePage;
