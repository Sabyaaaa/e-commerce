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
  size: string;
  materials: string;
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
  size,
  materials,
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
            <span className="card-price">Price: ₹{price}</span>
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
              <img className="description-img" src={imageSrc} alt="product" />
              <div className="des-content">
                <p>
                  <b>Size: </b>
                  {size}
                </p>
                <p>
                  <b>Category: </b>
                  {category}
                </p>
                <p>
                  <b>Color: </b>
                  {color}
                </p>
                <p>
                  <b>Material used: </b>
                  {materials}
                </p>
                <p>
                  <b>Description: </b>
                  {description}
                </p>
                <p>
                  <b>
                    <i>Product will be delivered within 7 days</i>
                  </b>
                </p>
                <p className="returns"><i>14 days easy exchange/returns </i>🩷 </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
