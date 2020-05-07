import React from 'react';
import styles from './Waiter.module.scss';
import TableBooked from '../Tables/TableBooked';

const WaiterOrdered = () => (
  <div className={styles.component}>
    <TableBooked />
  </div>
);

export default WaiterOrdered;