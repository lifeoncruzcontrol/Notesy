import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles/Navigation/styles.css';

const Navigation: React.FC = () => {
  return (
    <Nav justify variant="tabs">
      <Nav.Item>
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/history" className="nav-link">
          History
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;