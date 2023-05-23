import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import CategoryMenu from '../CategoryMenu';

function Nav() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategorySelect(category) {
    setSelectedCategory(category);
    // Handle category selection logic here
    console.log(`Selected category: ${category}`);
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex items-center justify-center">
          <li className="mx-2">
            <Link
              to=""
              className="text-gray-200 hover:text-gray-100 transition-colors duration-300"
            >
              {/* <CategoryMenu handleCategorySelect={handleCategorySelect} /> */}
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li className="mx-2">
            <button
              onClick={() => Auth.logout()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              LOGOUT
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex items-center">
          <li className="mx-2">
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover-scale"
              style={{ backgroundColor: '#00433F' }}
            >
              Signup
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover-rotate"
              style={{ backgroundColor: '#C8C8C8' }}
            >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-transparent">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/" className="flex items-center space-x-2">
          <img src="images/paw-finder-logo.png" alt="Logo" className="h-12" />
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
