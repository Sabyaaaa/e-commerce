import React from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";
import mockClothingItems from "../../MOCK_DATA.json";

const Page: React.FC = () => {

  return (
    <div className="container clothing-page">
      <div className="row">
        <div className="col-md-3">
          <Filters />
        </div>
        <div className="col-md-9">
          <div className="row">
            {mockClothingItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <Card
                  imageSrc={item.image_url}
                  productName={item.product_name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;




