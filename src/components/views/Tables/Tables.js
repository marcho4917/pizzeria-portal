import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

const Tables = () => (
  <div className={styles.component}>
    <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>table booked</Link><br/>
    <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>table event</Link><br/>
    <Link to={process.env.PUBLIC_URL + `/tables/booking/abc`}>tables booking abc</Link><br/>
    <Link to={process.env.PUBLIC_URL + `/tables/events/def`}>tables event def</Link><br/>
  </div>
);

export default Tables;