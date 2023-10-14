import React from "react";
import "./Filters.css";
import Category from "./Category/Category";
import Colour from "./Colour/Colour";
import Price from "./Price/Price";
import Size from "./Size/Size";
import RatingSlider from "./Rating/Rating";

interface FiltersProps {
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  selectedColors: string[];
  onColorChange: (color: string) => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  selectedPrice: string | null;
  onPriceChange: (price: string) => void;
  onRatingChange: (minRating: number) => void;
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
  onRatingChange,
}) => {
  return (
    <div className="filters-container">
      <h4>Filters</h4>
      <Category onCategoryChange={onCategoryChange} />
      <Size selectedSizes={selectedSizes} onSizeChange={onSizeChange} />
      <RatingSlider onRatingChange={onRatingChange} />
      <Price onPriceChange={onPriceChange} />
      <Colour onColorChange={onColorChange} />
    </div>
  );
};

export default Filters;
