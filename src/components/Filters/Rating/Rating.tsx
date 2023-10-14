import React, { useState } from "react";

interface RatingSliderProps {
  onRatingChange: (minRating: number) => void;
}

const RatingSlider: React.FC<RatingSliderProps> = ({ onRatingChange }) => {
  const [minRating, setMinRating] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinRating = parseFloat(event.target.value);
    setMinRating(newMinRating);
    onRatingChange(newMinRating);
  };

  return (
    <div className="rating-slider">
      <h5>Rating</h5>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={minRating}
        onChange={handleSliderChange}
      />
      <span>{minRating}</span>
    </div>
  );
};

export default RatingSlider;
