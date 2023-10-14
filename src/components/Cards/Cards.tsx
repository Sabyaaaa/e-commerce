import React, { useState } from "react";
import "./Cards.css";
import Button from "../Button/Button";

interface CardProps {
  imageSrc: string;
  productName: string;
  price: number;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  productName,
  price,
  description,
}) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const displayDescription = () => {
    setIsDescriptionVisible(true);
  };

  const hideDescription = () => {
    setIsDescriptionVisible(false);
  };

  return (
    <div className="card-deck custom-card">
      <div className="card">
        <img className="card-img-top custom-img" src={imageSrc} alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">Price: ${price.toFixed(2)}</p>
          <div className="d-flex justify-content-between">
            <Button onClick={() => {}} label="Add to Cart" isPrimary={true} />
            <Button onClick={displayDescription} label="Description" />
          </div>
        </div>

        {isDescriptionVisible && (
          <div className="description-popup">
            <div className="description-popup-content">
              <span className="close" onClick={hideDescription}>
                &times;
              </span>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
