import React from "react";
import "./InputField.scss";
interface InputFieldProps {
  label:string;
  placeHolder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeHolder,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
     
     <label className="label">{label}</label>
     <input className="input-field"
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
