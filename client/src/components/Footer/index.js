import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto py-4 px-6 flex justify-between">
        <ul className="flex items-center">
          <li className="mx-2">
            <Link
              to="/"
              className="text-gray-200 hover:text-gray-100 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/aboutus"
              className="text-gray-200 hover:text-gray-100 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li className="mx-2">
            <Link
              to="/contact"
              className="text-gray-200 hover:text-gray-100 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 transition-colors duration-300 mx-2">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 transition-colors duration-300 mx-2">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 transition-colors duration-300 mx-2">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-100 transition-colors duration-300 mx-2">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
