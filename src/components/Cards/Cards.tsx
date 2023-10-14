import React, { useState } from "react";
import "./Cards.css";

interface CardProps {
  imageSrc: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  color: string;
  gender: string;
  renderStars: (rating: number) => React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  productName,
  price,
  description,
  category,
  rating,
  color,
  gender,
  renderStars,
}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const displayDescription = () => {
    setIsDescriptionVisible(true);
  };

  const hideDescription = () => {
    setIsDescriptionVisible(false);
  };

  return (
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top custom-img" src={imageSrc} alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <div className="price-rating">
            <span className="card-price">Price: ${price.toFixed(2)}</span>
            <span className="rating-stars">{renderStars(rating)}</span>
            <span className="rating-value">{rating}</span>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-secondary" onClick={displayDescription}>
              Description
            </button>
          </div>
        </div>

        {isDescriptionVisible && (
          <div className="description-popup">
            <div className="description-popup-content">
              <span className="close" onClick={hideDescription}>
                &times;
              </span>
              <h2>{productName}</h2>
              <p>{`Rating: ${rating}`}</p>
              <p>{`Price: $${price}`}</p>
              <p>{`Category: ${category}`}</p>
              <p>{`Color: ${color}`}</p>
              <p>{`Gender: ${gender}`}</p>
              <p>{`Description: ${description}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
