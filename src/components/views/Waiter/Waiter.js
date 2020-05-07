import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Waiter = ({id}) => (
  <div className={styles.component}>
    <Link to={`/waiter/order/new`} activeClassName='active'>new order</Link>
    <Link to={`/waiter/order/123abc`} activeClassName='active'>waiter order 123abc </Link>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.string,
};
export default Waiter;