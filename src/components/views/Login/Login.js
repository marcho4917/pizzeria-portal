import React from 'react';
import styles from './Login.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: 'Monday', status: 'free', amount: '-'},
  {id: 'Tuesday', status: '6', amount: 44},
  {id: 'Wednesday', status: '12', amount: 12},
  {id: 'Thursday', status: '8.5', amount: 32},
  {id: 'Friday', status: '4', amount: 35},
  {id: 'Saturday', status: 'free', amount: '-'},
  {id: 'Sunday', status: 'free', amount: '-'},
];

const Login = () => (
  <Paper className={styles.component}>
    <div>
      <h3>Thats your weekly working time and the number of orders youve completed</h3>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Week day</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Number of orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Login;