import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TableBookedNew = () => (
  <Paper className={styles.component} elevation={3}>
    <div>
      <h3>Fill in the new reservation details</h3>
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

export default TableBookedNew;