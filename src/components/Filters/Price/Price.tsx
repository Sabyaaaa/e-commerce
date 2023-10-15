import React, { useState } from "react";
import "./Price.css";

interface PriceProps {
  onPriceChange: (minPrice: number, maxPrice: number) => void;
}

const Price: React.FC<PriceProps> = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMinPrice(value);
    onPriceChange(value, maxPrice);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMaxPrice(value);
    onPriceChange(minPrice, value);
  };

  return (
    <div className="filter-section">
      <h5>Price Range</h5>
      <div className="price-inputs">
        <div className="price-input">
          <label htmlFor="minPrice">Min</label>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
            style={{ width: "80%", marginRight: "10px" }}
            id="minPrice"
          />
        </div>
        <div className="price-input">
          <label htmlFor="maxPrice">Max</label>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            style={{ width: "80%" }}
            id="maxPrice"
          />
        </div>
      </div>
      <div className="slider-bar">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
    </div>
  );
};

export default Price;
