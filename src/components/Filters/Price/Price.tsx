import React from "react";
import "./Price.css";

const Price: React.FC = () => {
  return (
    <div className="filter-section">
      <h5>Price Range</h5>
      <label>
        <input type="radio" name="price" value="0-25" />
        $0 - $25
      </label>
      <label>
        <input type="radio" name="price" value="25-50" />
        $25 - $50
      </label>
      <label>
        <input type="radio" name="price" value="50-100" />
        $50 - $100
      </label>
    </div>
  );
};
export default Price;
