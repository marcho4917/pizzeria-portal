import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Home = () => {
  return(
    <div className={styles.component}>
      <div>
        <h1>Log in to start working:</h1>
      </div>
      <TextField id="standard-basic" label="login" /><br />
      <TextField id="standard-basic" label="Password" /><br />
      <Button variant="contained" component={Link} to={'/panel/login/'}>START WORK!</Button>
    </div>
  );
};

export default Home;