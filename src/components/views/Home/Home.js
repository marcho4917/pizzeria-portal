import React from 'react';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.component}>
    <div className={styles.circle}><h3>LOCAL<h1>45</h1></h3></div>
    <div className={styles.circle}><h3>DELIVERY<h1>145</h1></h3></div>
    <div className={styles.circle}><h3>EVENTS<h1>5</h1></h3></div>
    <div className={styles.circle}><h3>RESERV.<h1>8</h1></h3></div>
  </div>
);

export default Home; 