import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for the menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white text-black h-16 flex items-center justify-between px-6 sm:px-12 relative border-b-2 border-gray-300 font-sans ">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            src={assets.Logo}
            className="sm:w-12 sm:h-12 h-10 mr-12 rounded-full object-cover"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Links (Center) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex sm:flex-grow justify-center sm:relative top-0 left-0 w-full sm:w-auto bg-gray-600 sm:bg-transparent absolute`}
      >
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-12 lg:space-x-20 items-center justify-evenly sm:justify-center py-4 sm:py-0">
          <Link to="/" className="text-black" onClick={handleToggleMenu}>
            Home
          </Link>
          <Link to="/all-bikes" className="text-black" onClick={handleToggleMenu}>
            All Bikes
          </Link>
          <Link to="/about" className="text-black" onClick={handleToggleMenu}>
            About
          </Link>
          <Link to="/contact" className="text-black" onClick={handleToggleMenu}>
            Contact
          </Link>
        </div>
      </div>

      {/* Create Account Button (Right) */}
      <div className="ml-auto">
        <Link to="/signin" className="text-white">
          <button className="px-4 py-3 bg-blue-600 rounded-lg mr-4">
            Create Account
          </button>
        </Link>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="sm:hidden">
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <HiX className="text-black  w-8 h-8" /> // Close icon
          ) : (
            <HiMenu className="text-black w-8 h-8" /> // Hamburger icon
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
