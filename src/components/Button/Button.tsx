import React from "react";
import "./Button.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
interface ButtonProps {
  label: string;
  className: string;
  key?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ key, label, className, onClick }) => {
  return (
    <button key={key} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
