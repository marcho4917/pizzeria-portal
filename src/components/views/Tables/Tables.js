import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Tables = ({id}) => (
  <div className={styles.component}>
    <Link to={`/tables/booking/new`} activeClassName='active'>table booked</Link>
    <Link to={`/tables/events/new`} activeClassName='active'>table event</Link>
    <Link to={`/tables/booking/${id}`} activeClassName='active'>tables booking {id}</Link>
    <Link to={`/tables/events/${id}`} activeClassName='active'>tables event {id}</Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;