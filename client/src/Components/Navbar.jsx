import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black border-b-2 border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={assets.Logo}
                className="h-12 w-12 rounded-full object-cover"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation Links (Visible on larger screens) */}
          <div className="hidden sm:flex flex-grow justify-center items-center space-x-20 ml-[40vh]">
            <Link to="/" className="text-black hover:text-gray-600">
              Home
            </Link>
            <Link to="/all-bikes" className="text-black hover:text-gray-600">
              All Bikes
            </Link>
            <Link to="/about" className="text-black hover:text-gray-600">
              About
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* Create Account Button (Visible on larger screens) */}
          <div className="ml-36 sm:block">
            <Link to="/SignUp">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Create Account
              </button>
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="sm:hidden">
            <button onClick={handleToggleMenu} className="text-black">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible only on small screens */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1  ">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-100"
              onClick={handleToggleMenu}
            >
              Home
            </Link>
            <Link
              to="/all-bikes"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-100"
              onClick={handleToggleMenu}
            >
              All Bikes
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-100"
              onClick={handleToggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-100"
              onClick={handleToggleMenu}
            >
              Contact
            </Link>
            {/* Create Account Button for Mobile View */}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
