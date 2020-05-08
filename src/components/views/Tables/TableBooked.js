import React from 'react';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  {time: '10:00-11:00', people: 3, name: 'Fox', apetisers: 'yes'},
];

const TableBooked = (props) => (
  <Paper className={styles.component}>
    <div>
      <h3>Reservation {`${props.match.params.id}`} details</h3>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Number of people</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Appetisers</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.time}>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell>
              {row.people} 
            </TableCell>
            <TableCell>
              {row.name}
            </TableCell>
            <TableCell>
              {row.apetisers}  
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

TableBooked.propTypes = {
  match: PropTypes.object,
};

export default TableBooked;