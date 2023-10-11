import React from "react";
import "./Colour.css";

interface ColourProps {
  onColorChange: (color: string) => void;
}

const Colour: React.FC<ColourProps> = ({ onColorChange }) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onColorChange(value);
  };
  return (
    <div className="filter-section">
      <h5>Color</h5>
      <label>
        <input
          type="checkbox"
          name="color"
          value="red"
          onChange={handleColorChange}
        />
        Red
      </label>
      <label>
        <input
          type="checkbox"
          name="color"
          value="blue"
          onChange={handleColorChange}
        />
        Blue
      </label>
      <label>
        <input
          type="checkbox"
          name="color"
          value="pink"
          onChange={handleColorChange}
        />
        Pink
      </label>
      <label>
        <input
          type="checkbox"
          name="color"
          value="beige"
          onChange={handleColorChange}
        />
        Beige
      </label>
      <label>
        <input
          type="checkbox"
          name="color"
          value="black"
          onChange={handleColorChange}
        />
        Black
      </label>
      <label>
        <input
          type="checkbox"
          name="color"
          value="yellow"
          onChange={handleColorChange}
        />
        Yellow
      </label>
    </div>
  );
};

export default Colour;
