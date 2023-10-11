// src/components/Filters.tsx

import React from "react";
import "./Filters.css";

const Filters: React.FC = () => {
  return (
    <div className="filters-container">
      <h4>Filters</h4>
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
        {/* Add more price range options as needed */}
      </div>
      <div className="filter-section">
        <h5>Gender</h5>
        <label>
          <input type="checkbox" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="checkbox" name="gender" value="female" />
          Female
        </label>
        {/* Add more gender options as needed */}
      </div>
      <div className="filter-section">
        <h5>Size</h5>
        <label>
          <input type="checkbox" name="size" value="small" />
          Small
        </label>
        <label>
          <input type="checkbox" name="size" value="medium" />
          Medium
        </label>
        <label>
          <input type="checkbox" name="size" value="large" />
          Large
        </label>
        {/* Add more size options as needed */}
      </div>
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
          Green
        </label>
      </div>
    </div>
  );
};

export default Filters;
