import React, { useState } from "react";
import "./Filters.css";
import Category from "./Category/Category";
import Colour from "./Colour/Colour";
import Price from "./Price/Price";
import Size from "./Size/Size";

interface FiltersProps {
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedSizes, onSizeChange }) => {
  return (
    <div className="filters-container">
      <h4>Filters</h4>
      <Category />
      <Price />
      <Colour />
      <Size selectedSizes={selectedSizes} onSizeChange={onSizeChange} />
    </div>
  );
};

export default Filters;
