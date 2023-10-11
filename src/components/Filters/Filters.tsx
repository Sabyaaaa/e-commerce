import React, { useState } from "react";
import "./Filters.css";
import Category from "./Category/Category";
import Colour from "./Colour/Colour";
import Price from "./Price/Price";
import Size from "./Size/Size";

interface FiltersProps {
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  selectedColors: string[];
  onColorChange: (color: string) => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedSizes,
  onSizeChange,
  selectedColors,
  onColorChange,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <div className="filters-container">
      <h4>Filters</h4>
      <Category onCategoryChange={onCategoryChange} /> 
      <Price />
      <Colour onColorChange={onColorChange} />
      <Size selectedSizes={selectedSizes} onSizeChange={onSizeChange} />
    </div>
  );
};

export default Filters;
