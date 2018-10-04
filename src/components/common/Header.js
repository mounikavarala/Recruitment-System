import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active"> HomePage </IndexLink>
      {"|"}
      <Link to = "/JobListPage" activeClassName="active"> Job List </Link>
      {"|"}
      <Link to = "/jobInfoPage" activeClassName="active"> Job Info </Link>


    </nav>
  );
};

export default Header;

