import React, { useState, useEffect } from "react";
import Card from "../Cards/Cards";
import "./ClothingPage.css";
import Filters from "../Filters/Filters";
import mockClothingItems from "../../MOCK_DATA.json";
import Navbar from "../Navbar/Navbar";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating - floorRating >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (hasHalfStar && i === floorRating + 1) {
        stars.push(<FaStarHalfAlt key={i} className="star-half" />);
      } else {
        stars.push(<FaStar key={i} className="star-unfilled" />);
      }
    }

    return stars;
  };
  const handleRatingChange = (minRating: number) => {
    // Handle rating change here, for example, filter by minimum rating
    const filteredClothingItems = mockClothingItems.filter(
      (item) => item.rating >= minRating
    );
    setFilteredItems(filteredClothingItems);
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
    <div className="clothing-page">
      <div className="filter-class">
        <Filters
          selectedSizes={selectedSizes}
          onSizeChange={handleSizeChange}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          selectedPrice={selectedPrice}
          onPriceChange={handlePriceChange}
          onRatingChange={handleRatingChange}
        />
      </div>

      <div className="col-md-9 card-container">
        <Navbar onGenderChange={handleGenderChange} />
        <div className="row">
          {filteredItems.map((item) => (
            <div className="col-md-2" key={item.id}>
              <Card
                imageSrc={item.image_url}
                productName={item.product_name}
                price={item.price}
                description={item.description}
                category={item.category}
                color={item.color}
                rating={item.rating}
                gender={item.gender}
                size={item.size}
                image_url2={item.image_url}
                delivery_date={item.delivery_date}
                materials={item.material}
                renderStars={renderStars}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothingPage;
