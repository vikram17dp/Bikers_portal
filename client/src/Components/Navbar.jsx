import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, userData, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(userData);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-purple-200 text-black   font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
          <div className="hidden sm:flex flex-grow justify-center items-center space-x-20 ml-4">
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

          {/* Profile Image or Create Account Button */}
          <div className="ml-4 sm:block">
            {token && userData ? (
              <div className="flex items-center gap-2 group relative cursor-pointer">
                <img
                  src={userData?.image}
                  className="w-10  rounded-full ml-[28vh] md:ml-[10vh] lg:ml-0 mb-1"
                  alt="Profile Image"
                />

                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p
                      className="hover:text-black cursor-pointer"
                      onClick={() => navigate("/my-profile")}
                    >
                      My Profile
                    </p>
                    <p
                      className="hover:text-black cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/Signin")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Create Account
              </button>
            )}
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="sm:hidden">
            <button onClick={handleToggleMenu} className="text-black">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-10 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible only on small screens */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
