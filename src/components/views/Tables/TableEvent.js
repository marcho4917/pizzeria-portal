import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TableEvent = (props) => (
  <div className={styles.component}>TableEvent {`${props.match.params.id}`}</div>
);

TableEvent.propTypes = {
  match: PropTypes.object,
};

export default TableEvent;