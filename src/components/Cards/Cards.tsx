import React from "react";
import "./Cards.css";

interface CardProps {
  imageSrc: string;
  productName: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageSrc, productName, price }) => {
  return (
    <div className="card">
      <img className="card-img-top custom-img" src={imageSrc} alt="Product" />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Price: ${price.toFixed(2)}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-secondary">Description</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
