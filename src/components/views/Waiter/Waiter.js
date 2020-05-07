import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={`/waiter/order/new`} activeClassName='active'>new order</Link><br/>
    <Link to={`/waiter/order/123abc`} activeClassName='active'>waiter order 123abc </Link>
  </div>
);

export default Waiter;