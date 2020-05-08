import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const WaiterOrdered = (props) => (
  <div className={styles.component}>WaiterOrdered {`${props.match.params.id}`}</div>
);

WaiterOrdered.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrdered;