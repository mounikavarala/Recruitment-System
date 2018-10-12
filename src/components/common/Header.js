import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active"> HomePage </IndexLink>
      {"|"}
      <Link to = "/jobs-list" activeClassName="active"> Job List </Link>
      {"|"}
      <Link to = "/job-info" activeClassName="active"> Job Info </Link>


    </nav>
  );
};

export default Header;

