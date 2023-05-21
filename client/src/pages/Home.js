import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search categories"
      />
      <CategoryMenu />
      <ProductList searchTerm={searchTerm} />
      <Cart />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Home;
