import React from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Login = () => {
  return(
    <div className={styles.component}>
      <Box display="flex" justifyContent="center" m={2}>
        <TextField id="standard-basic" label="login" /> 
      </Box>
      <Box display="flex" justifyContent="center" m={2}>
        <TextField id="standard-basic" label="Password" />
      </Box>
      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/'}>START WORK!</Button>
      </Box>
    </div>
  );
};

export default Login;