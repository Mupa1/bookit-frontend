import React from 'react';

import styles from './HomePage.module.css';
import SignUp from '../../components/SignUp/SignUp';

const HomePage = () => {
  const handleSignUpSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className={styles.homeContainer}>
      <h1>BOOK AN APPOINTMENT</h1>
      <button type="button">Register</button>
      <button type="button">Login</button>
      <SignUp handleSignUpSubmit={handleSignUpSubmit} />
    </div>
  );
};

export default HomePage;
