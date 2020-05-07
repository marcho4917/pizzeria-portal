import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const TableBooked = (props) => (
  <div className={styles.component}>TableBooked {`${props.match.params.id}`}</div>
);

TableBooked.propTypes = {
  match: PropTypes.object,
};

export default TableBooked;