import React, { useState, useEffect, useRef } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Nav from "../components/Nav";
import Cart from "../components/Cart";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const productListRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSearchTerm(category);
  };

  useEffect(() => {
    // Scroll to the product list when searchTerm changes
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-6 flex flex-col mt-10" style={{ marginLeft: "-20px" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search breeds..."
            className="border-4 border-custom-green bg-transparent rounded px-4 py-2 mb-4 md:mb-1 w-full"
          />
          <CategoryMenu handleCategorySelect={handleCategorySelect} className="mt-4  " />
          <p className="text-custom-blue text-8xl font-bold mb-2 mt-6">YOUR NEW</p>
          <p className="text-custom-green text-8xl font-bold mb-2">PAW MATE </p>
          <p className="text-custom-green text-8xl font-bold"> AWAITS...</p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/pitbull-homepage.png" alt="pitbull" className="h-auto mx-auto" style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <div ref={productListRef}>
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;

