import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active"> Jobinfo </IndexLink>
      {"|"}
      <Link to = "/Jobtitle" activeClassName="active"> Jobtitle </Link>VCF
      {"|"}
      <Link to = "/Contactdetails" activeClassName="active"> Contactdetails </Link>

    </nav>
  );
};

export default Header;
