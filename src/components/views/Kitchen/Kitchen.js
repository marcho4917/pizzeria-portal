import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Kitchen extends React.Component {
  static propTypes = {
    fetchOrders: PropTypes.func,
    orders: PropTypes.array,
    updateStarted: PropTypes.func,
  }

  componentDidMount(){
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  renderActions (order, status) {
    const { updateStarted } = this.props;
    switch (status) {
      case 'ordered':
        return (
          <>
            <Button onClick={() => updateStarted(order, 'READY')}>READY</Button>
          </>
        );
      case 'new order':
        return (
          <>
            <Button onClick={() => updateStarted(order, 'READY')}>READY</Button>
          </>
        );
      default:
        return null;
    }
  }

  render() {
    const { orders } = this.props;
    return (
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
            {orders.map(row => (
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
                  {this.renderActions(row.order, row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Kitchen;