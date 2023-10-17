import React, { useEffect } from "react";
import "./Navbar.css";
import Button from "../Button/Button";

interface NavbarProps {
  onGenderChange: (gender: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGenderChange }) => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");

    if (canvas) {
      const context = canvas.getContext("2d");
      const navHeight = 80;
      const waveStretch = 10;
      const waveLength = 0.01;
      let velocity = 0.01;

      const resizeCanvas = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      window.addEventListener("resize", resizeCanvas);

      const animate = () => {
        if (context && canvas) {
          requestAnimationFrame(animate);
          context.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < window.innerWidth; i += 0.5) {
            context.save();
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(
              i,
              navHeight + Math.sin(i * waveLength + velocity) * waveStretch
            );
            context.strokeStyle = "#5C5CFF";
            context.stroke();
            context.closePath();
            context.restore();
          }

          velocity += 0.1;
        }
      };

      resizeCanvas();
      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  const handleGenderChange = (gender: string) => {
    onGenderChange(gender);
  };

  return (
    <nav className="navbar">
      <canvas id="canvas"></canvas>
      <div className="brand-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6baaublXNGVY3ZGg4DIQAfOU89md35NcJbA&usqp=CAU"
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
            MEN
          </li>
          <li
            className="navbar-menu-item"
            onClick={() => handleGenderChange("women")}
          >
            WOMEN
          </li>
        </ul>
      </div>
      <div className="navbar-actions">
        <ul className="navbar-actions-list">
          <Button label="Cart" className="card-btn" />
          <Button label="Login/Register" className="card-btn card-btn-1" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
