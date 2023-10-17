import React from "react";
import "./Button.css";
interface ButtonProps {
  label: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
