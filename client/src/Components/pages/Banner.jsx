import React from 'react';
import { assets } from '../../assets/assets'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const handleViewMoreClick = () => {
    navigate('/all-bikes'); 
    window.scrollTo(0, 0); 
  };
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg px-6 sm:px-10 md:px-14 lg:px-16 my-20 md:mx-10 text-left shadow-lg overflow-hidden">
      {/* Left Section with Text and Button */}
      <div className="flex-1 py-10 sm:py-12 md:py-16 lg:py-24 lg:pl-6 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="block">Book Your Ride</span>
          <span className="block mt-4">With 100+ Trusted Bikes</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base text-gray-200">
          Explore a wide range of bikes available for booking and enjoy a seamless riding experience.
        </p>
        <button
          onClick={handleViewMoreClick}
          className="bg-white text-blue-700 font-medium text-sm sm:text-base px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-transform duration-300 mt-10"
        >
          View Bikes
        </button>
      </div>

      {/* Right Section with Image */}
      <div className="relative hidden md:block md:w-1/2 lg:w-[400px]">
        <img
          src={assets.bike8}
          alt="Bike Banner"
          className="w-full h-full object-cover absolute bottom-0 right-0 "
        />
      </div>
    </div>
  );
};

export default Banner;
