import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <nav>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink><br/>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink><br/>
    <NavLink to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</NavLink><br/>
    <NavLink to={`${process.env.PUBLIC_URL}/Tables`} activeClassName='active'>Tables</NavLink><br/>
    <NavLink to={`${process.env.PUBLIC_URL}/Waiter`} activeClassName='active'>Waiter</NavLink>
  </nav>
);

export default PageNav;