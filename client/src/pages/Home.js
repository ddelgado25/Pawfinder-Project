import React, { useState, useEffect, useRef } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const productListRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSearchTerm(category);
  };

  const handleSearchButton = () => {
    // Perform search or any other action when search button is clicked
    // You can access the current value of searchTerm here and perform your logic
    console.log(searchTerm);

    // Scroll to the product list
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        <div className="w-full md:w-2/4 pr-6 flex flex-col mt-10" style={{ marginLeft: "-20px" }}>
          <div className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search breeds..."
                className="border-4 border-custom-green bg-transparent px-4 py-2 mb-4 md:mb-1 w-full pr-10 "
              />
              <button
                type="button"
                onClick={handleSearchButton}
                className="absolute right-0 top-0 bottom-1 bg-custom-green text-white px-3 py-1.5 flex items-center justify-center transition duration-300 ease-in-out  hover:scale-105 transform"
                style={{ borderRadius: "0 0.25rem 0.25rem 0", fontSize: "0.85rem" }}
              >
                Search
              </button>
            </div>
          </div>

          <CategoryMenu handleCategorySelect={handleCategorySelect} className="mt-4" />
          <p className="text-custom-blue text-8xl font-bold mb-2 mt-6">YOUR NEW</p>
          <p className="text-custom-green text-8xl font-bold mb-2">PAW MATE </p>
          <p className="text-custom-green text-8xl font-bold"> AWAITS...</p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/images/pitbull-homepage.png" alt="pitbull" className="h-auto mx-auto" style={{ maxWidth: "85%" }} />
        </div>
      </div>
      <div ref={productListRef}>
        <ProductList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;

