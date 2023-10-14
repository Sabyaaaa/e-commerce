import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
  isPrimary?: boolean; // Optional prop to determine button style
}

const Button: React.FC<ButtonProps> = ({ onClick, label, isPrimary }) => {
  const buttonClass = isPrimary ? "btn btn-primary" : "btn btn-secondary";

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
