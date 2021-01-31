import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => {
  const currentUser = localStorage.getItem('token');
  if (currentUser) { return <Redirect to="/doctors" />; }
  return (
    <section className={styles.homeContainer}>
      <h1>BookIT</h1>
      <button type="button">
        <Link to="/signin" className="text-white">Sign In</Link>
      </button>
      <button type="button">
        <Link to="/signup" className="text-white">Register</Link>
      </button>
    </section>
  );
};

export default HomePage;
