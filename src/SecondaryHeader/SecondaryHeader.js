import React from 'react';
import * as B from 'reactstrap';
import {Link} from 'react-router-dom';
import './SecondaryHeader.css';

const SecondaryHeader = () => {
  return (
    <div className="App">
       <B.Navbar color="dark" light expand="md">
        <B.NavbarBrand>
          <Link to="/login">Insta Trade</Link>
        </B.NavbarBrand>
        <B.Nav pullRight>

        </B.Nav>
      </B.Navbar>
    </div>
  );
};

export default SecondaryHeader;