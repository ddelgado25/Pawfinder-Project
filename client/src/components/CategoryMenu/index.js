import React, { useState } from 'react';
import '../../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


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
        className="w-24.5 bg-custom-green text-white px-3 py-2 rounded flex items-center justify-between transition duration-300 ease-in-out hover:scale-105 transform"
        onClick={handleAdoptButtonClick}
      >
        Breeds
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </button>
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-transparent rounded-md shadow-lg dropdown-fade-in">
          {categories.map((category) => (
            <button
              key={category.name}
              className="block w-full text-left p-2 bg-white hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 mb-1 drop-shadow"
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
