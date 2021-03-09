import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => {
  const currentUser = localStorage.getItem('token');
  if (currentUser) { return <Redirect to="/doctors" />; }
  return (
    <section className={styles.homeContainer}>
      <h1>BookIT</h1>
      <Link to="/signin" className="text-white">
        <button type="button">
          Sign In
        </button>
      </Link>
      <Link to="/signup" className="text-white">
        <button type="button">
          Register
        </button>
      </Link>
    </section>
  );
};

export default HomePage;
