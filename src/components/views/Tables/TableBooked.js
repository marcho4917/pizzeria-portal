import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const TableBooked = ({id}) => (
  <Link to={`/tables/booking/${id}`} />
);

TableBooked.propTypes = {
  id: PropTypes.string,
};

export default TableBooked;