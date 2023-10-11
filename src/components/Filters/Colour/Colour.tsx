import React from "react";
import "./Colour.css";

const Colour: React.FC = () => {
  return (
    <div className="filter-section">
      <h5>Color</h5>
      <label>
        <input type="checkbox" name="color" value="red" />
        Red
      </label>
      <label>
        <input type="checkbox" name="color" value="blue" />
        Blue
      </label>
      <label>
        <input type="checkbox" name="color" value="green" />
        Pink
      </label>
      <label>
        <input type="checkbox" name="color" value="green" />
        Beige
      </label>
      <label>
        <input type="checkbox" name="color" value="green" />
        Black
      </label>
      <label>
        <input type="checkbox" name="color" value="green" />
        Yellow
      </label>
    </div>
  );
};

export default Colour;
