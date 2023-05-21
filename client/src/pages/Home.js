import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSearchTerm(category);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search categories"
      />
      <CategoryMenu handleCategorySelect={handleCategorySelect} />
      <ProductList searchTerm={searchTerm} />
      <Cart />

    </div>
  );
};

export default Home;
