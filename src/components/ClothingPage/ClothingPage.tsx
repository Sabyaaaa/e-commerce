import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";
import mockClothingItems from "../../MOCK_DATA.json";

const ClothingPage: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(mockClothingItems);

  const handleSizeChange = (size: string) => {
    console.log("Selected size:", size); // Log the selected size
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((prevSize) => prevSize !== size)
        : [...prevSizes, size]
    );
  };

  useEffect(() => {
    const filteredClothingItems = mockClothingItems.filter((item) => {
      return (
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => item.size === size)
      );
    });

    setFilteredItems(filteredClothingItems);
  }, [selectedSizes]);

  console.log("Filtered Items:", filteredItems); // Log filtered items to the console

  return (
    <div className="container clothing-page">
      <div className="col-md-3">
        <Filters
          selectedSizes={selectedSizes}
          onSizeChange={handleSizeChange}
        />
      </div>
      <div className="col-md-9">
        <div className="row">
          {filteredItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <Card
                imageSrc={item.image_url}
                productName={item.product_name}
                price={item.price}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;
