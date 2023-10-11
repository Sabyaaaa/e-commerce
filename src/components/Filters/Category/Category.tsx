import React  from "react";
import "./Category.css";

const Category: React.FC = () => {
    return (
        <div className="filter-section">
        <h5>Category</h5>
        <label>
          <input type="checkbox" name="category" value="t-shirt" />
          T-shirt
        </label>
        <label>
          <input type="checkbox" name="category" value="jeans" />
          Jeans
        </label>
        <label>
          <input type="checkbox" name="category" value="dress" />
          Dress
        </label>
        <label>
          <input type="checkbox" name="category" value="shirts" />
          Shirts
        </label>
        <label>
          <input type="checkbox" name="category" value="trousers" />
          Trousers
        </label>
        <label>
          <input type="checkbox" name="category" value="jacket" />
          Jacket
        </label>
        <label>
          <input type="checkbox" name="category" value="sweater" />
          Sweater
        </label>
      </div>
    );
}

export default Category;