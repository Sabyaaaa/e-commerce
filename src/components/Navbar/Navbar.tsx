import React from "react";
import "./Navbar.css";

// import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
interface NavbarProps {
  onGenderChange: (gender: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ onGenderChange }) => {
  const handleGenderChange = (gender: string) => {
    onGenderChange(gender);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://i.pinimg.com/474x/f5/ae/c9/f5aec9c889e1c28268b62e0472a9f33b.jpg"
          alt="Brand Logo"
          className="brand-logo"
        />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li
            className="navbar-menu-item"
            onClick={() => handleGenderChange("men")}
          >
            Men
          </li>
          <li
            className="navbar-menu-item"
            onClick={() => handleGenderChange("women")}
          >
            Women
          </li>
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
