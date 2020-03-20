import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3 className="logo">Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/clients">
          <li>Clients</li>
        </Link>
        <Link style={navStyle} to="/services">
          <li>Services</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
