// src/components/Navbar.tsx

import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="path/to/your-logo.png" alt="Brand Logo" className="brand-logo" />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-item">Men</li>
          <li className="navbar-menu-item">Women</li>
        </ul>
      </div>
      <div className="navbar-actions">
        <ul className="navbar-actions-list">
          <li className="navbar-actions-item">Profile</li>
          <li className="navbar-actions-item">Wishlist</li>
          <li className="navbar-actions-item">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
