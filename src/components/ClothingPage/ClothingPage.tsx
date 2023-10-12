import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";
import mockClothingItems from "../../MOCK_DATA.json";
import Navbar from "../Navbar/Navbar";

const ClothingPage: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(mockClothingItems);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

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
  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };

  useEffect(() => {
    const filteredClothingItems = mockClothingItems.filter((item) => {
      const passesSizeFilter =
        selectedSizes.length === 0 ||
        selectedSizes.includes(item.size.toLowerCase());
      const passesColorFilter =
        selectedColors.length === 0 ||
        selectedColors.includes(item.color.toLowerCase());
      const passesCategoryFilter =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category.toLowerCase());
      let passesPriceFilter = true;
      const passesGenderFilter =
        !selectedGender ||
        item.gender.toLowerCase() ===
          (selectedGender || item.gender).toLowerCase();

      if (selectedPrice) {
        const [minPrice, maxPrice] = selectedPrice.split("-").map(parseFloat);
        passesPriceFilter = item.price >= minPrice && item.price <= maxPrice;
      }

      return (
        passesSizeFilter &&
        passesColorFilter &&
        passesCategoryFilter &&
        passesPriceFilter &&
        passesGenderFilter
      );
    });

    setFilteredItems(filteredClothingItems);
  }, [
    selectedSizes,
    selectedColors,
    selectedCategories,
    selectedPrice,
    selectedGender,
  ]);

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
          selectedPrice={selectedPrice}
          onPriceChange={handlePriceChange}
        />
      </div>

      <div className="col-md-9">
        <Navbar onGenderChange={handleGenderChange} />
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
