import React from "react";
import './Button.scss'

interface ButtonProps {
  onClick: () => void;

  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="button" onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
