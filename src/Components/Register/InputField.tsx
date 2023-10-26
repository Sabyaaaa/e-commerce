import React from "react";

interface InputFieldProps {
  label: string;
  placeHolder: string;
  type: string;
  name: string;
  value: string;
  mandatory:boolean;
  // autoComplete:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  placeHolder,
  type,
  name,
  value,
  onChange,
  mandatory,
  // autoComplete,
}) => {
  return (
    <div>
      <label className="label">{ label} {mandatory && <span className = "mandatory">*</span>}</label>
      <input
        className="input-field"
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        // autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputField;
