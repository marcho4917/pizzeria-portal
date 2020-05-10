import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {status: 'ordered', order: 321, table: 1, details: 'lorem ipsum'},
  {status: 'ordered', order: 758, table: 2, details: 'lorem ipsum'},
  {status: 'ordered', order: 123, table: 2, details: 'lorem ipsum'},
  {status: 'new order', order: 234, table: 5, details: 'lorem ipsum'},
  {status: 'new order', order: 345, table: 6, details: 'lorem ipsum'},
  {status: 'ordered', order: 456, table: 6, details: 'lorem ipsum'},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <>
          <Button>READY</Button>
        </>
      );
    case 'new order':
      return (
        <>
          <Button>READY</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <Paper className={styles.component} elevation={3}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Order details</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
              {row.order}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.details}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;