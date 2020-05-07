import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

const Tables = () => (
  <div className={styles.component}>
    <Link to={`/tables/booking/new`} activeClassName='active'>table booked</Link>
    <Link to={`/tables/events/new`} activeClassName='active'>table event</Link>
    <Link to={`/tables/booking/abc`} activeClassName='active'>tables booking abc</Link>
    <Link to={`/tables/events/def`} activeClassName='active'>tables event def</Link>
  </div>
);

export default Tables;