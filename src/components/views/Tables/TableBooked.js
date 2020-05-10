import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TableBooked = (props) => (
  <Paper className={styles.component} elevation={3}>
    <div>
      <h3>Reservation {`${props.match.params.id}`} details</h3>
    </div>
    <div className={styles.formular}>
      <TextField
        id="datetime-local"
        label="Date & time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-basic" 
        label="Table" 
        defaultValue="Table 2"
      />
      <TextField 
        id="standard-basic" 
        label="Name" 
        defaultValue="Fox"
      />
      <TextField 
        id="standard-basic" 
        label="Person value" 
        defaultValue="4"
      />
      <TextField 
        id="standard-basic" 
        label="Appetisers" 
        defaultValue="Yes"
      />
    </div>
  </Paper>
);

TableBooked.propTypes = {
  match: PropTypes.object,
};

export default TableBooked;