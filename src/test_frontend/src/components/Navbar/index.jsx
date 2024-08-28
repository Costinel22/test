import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure to create a CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Agritek Solution Save Warehouse" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/product-management">Product Management</Link>
        <Link to="/policies">Policies</Link>
        <div className="dropdown">
          <button className="dropdown-toggle">
            Transport
          </button>
          <div className="dropdown-menu">
            <Link to="/transport-planning">Transport Planning</Link>
            <Link to="/transport-monitoring">Transport Monitoring</Link>
            <Link to="/resource-management">Resource Management</Link>
          </div>
        </div>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About Us</Link>
        <Link to="/support">Support</Link>
        <Link to="/legal">Legal</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">☰</span>
      </div>
    </nav>
  );
};

export default Navbar;
