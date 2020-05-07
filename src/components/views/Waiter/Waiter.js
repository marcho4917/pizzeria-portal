import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

const Waiter = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + `/waiter/order/new`}>new order</Link><br/>
    <Link to={process.env.PUBLIC_URL + `/waiter/order/123abc`}>waiter order 123abc </Link>
  </div>
);

export default Waiter;