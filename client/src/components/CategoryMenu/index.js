import React from 'react';

function CategoryMenu({ handleCategorySelect }) {
  const handleClick = (category) => {
    handleCategorySelect(category);
  };

  const categories = [
    { name: 'Golden Retriever' },
    { name: 'French Bulldog' },
    { name: 'Maltipoos' },
    { name: 'English Shepherd' },
  ];

  return (
    <div>
      <h2>Choose a Breed:</h2>
      {categories.map((category) => (
        <button key={category.name} onClick={() => handleClick(category.name)}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
