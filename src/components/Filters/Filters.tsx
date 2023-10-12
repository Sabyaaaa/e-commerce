import React from "react";
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
  selectedPrice: string | null;
  onPriceChange: (price: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedSizes,
  onSizeChange,
  selectedColors,
  onColorChange,
  selectedCategories,
  onCategoryChange,
  selectedPrice,
  onPriceChange,
}) => {
  return (
    <div className="filters-container">
      <h4>Filters</h4>
      <Category onCategoryChange={onCategoryChange} />
      <Price onPriceChange={onPriceChange} />
      <Colour onColorChange={onColorChange} />
      <Size selectedSizes={selectedSizes} onSizeChange={onSizeChange} />
    </div>
  );
};

export default Filters;
