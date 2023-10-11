import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";
import mockClothingItems from "../../MOCK_DATA.json";

const ClothingPage: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(mockClothingItems);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((prevSize) => prevSize !== size)
        : [...prevSizes, size]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((prevColor) => prevColor !== color)
        : [...prevColors, color]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((prevCategory) => prevCategory !== category)
        : [...prevCategories, category]
    );
  };

  useEffect(() => {
    const filteredClothingItems = mockClothingItems.filter((item) => {
      const passesSizeFilter =
        selectedSizes.length === 0 || selectedSizes.includes(item.size);
      const passesColorFilter =
        selectedColors.length === 0 || selectedColors.includes(item.color);
      const passesCategoryFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);  
      return passesSizeFilter && passesColorFilter && passesCategoryFilter;
    });

    setFilteredItems(filteredClothingItems);
  }, [selectedSizes, selectedColors, selectedCategories]);

  return (
    <div className="container clothing-page">
      <div className="col-md-3">
        <Filters
           selectedSizes={selectedSizes}
           onSizeChange={handleSizeChange}
           selectedColors={selectedColors}
           onColorChange={handleColorChange}
           selectedCategories={selectedCategories}
           onCategoryChange={handleCategoryChange}
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
