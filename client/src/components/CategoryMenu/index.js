import React, { useState } from 'react';
import '../../index.css';

function CategoryMenu({ handleCategorySelect }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    handleCategorySelect(category);
    setShowDropdown(false);
  };

  const handleAdoptButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const categories = [
    { name: 'Golden Retriever' },
    { name: 'French Bulldog' },
    { name: 'Yorkshire Terrier' },
    { name: 'Beagle' },
    { name: 'Pitbull' },
  ];

  return (
    <div className="relative">
      <button
        className="w-24 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAdoptButtonClick}
      >
        ADOPT
      </button>
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg dropdown-fade-in">
          {categories.map((category) => (
            <button
              key={category.name}
              className="block w-full text-left p-2 hover:bg-gray-200"
              onClick={() => handleCategorySelect(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;

