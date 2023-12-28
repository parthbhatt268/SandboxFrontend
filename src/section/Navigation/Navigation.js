// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/SandBox" className="nav-link">Sandbox 1</Link>
      <Link to="/SandBox2" className="nav-link">Sandbox 2</Link>
      <Link to="/SandBox3" className="nav-link">Sandbox 3</Link>
      <Link to="/SandBox4" className="nav-link">Sandbox 4</Link>
    </div>
  );
}

export default Navigation;
