import React from "react";
import "./Button.scss";
interface ButtonProps {
  onClick: () => void;

  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className="btn-container"> 
    <button className="btn" onClick={onClick} type="button">
      {label}
    </button>
    </div>
  );
};

export default Button;
