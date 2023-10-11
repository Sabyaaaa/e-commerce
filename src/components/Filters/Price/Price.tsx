import React from "react";
import "./Price.css";

interface PriceProps {
  onPriceChange: (price: string) => void;
}

const Price: React.FC<PriceProps> = ({ onPriceChange }) => {
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onPriceChange(value);
  };
  return (
    <div className="filter-section">
      <h5>Price Range</h5>
      <label>
        <input
          type="radio"
          name="price"
          value="0-25"
          onChange={handlePriceChange}
        />
        $0 - $25
      </label>
      <label>
        <input
          type="radio"
          name="price"
          value="25-50"
          onChange={handlePriceChange}
        />
        $25 - $50
      </label>
      <label>
        <input
          type="radio"
          name="price"
          value="50-100"
          onChange={handlePriceChange}
        />
        $50 - $100
      </label>
    </div>
  );
};
export default Price;
