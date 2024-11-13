import React from "react";
import { useNavigate } from "react-router-dom";
import { portal_list } from "../../assets/assets.js"; 
const TopBikes = () => {
  const navigate = useNavigate();

  const topBikes = portal_list.filter((item) => item.category === "Bike").slice(0, 9); // Showing 9 bikes for a cleaner 3x3 grid
  const handleViewMoreClick = () => {
    navigate('/all-bikes'); 
    window.scrollTo(0, 0); 
  };
  return (
    <div className="flex flex-col items-center gap-8  text-gray-900 md:mx-10 text-center">
      <h1 className="text-4xl font-bold text-gray-500">Top Bikes to Book</h1>
      <p className="sm:w-1/2 text-[14px]  ">
        Explore our selection of top bikes available for booking.
      </p>
      
      {/* Bike Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:w-[70%] w-[100%] px-6">
        {topBikes.map((bike) => (
          <div
            key={bike._id}
            onClick={() => {
              navigate(`/bike-details/${bike._id}`);
              window.scrollTo(0, 0); 
            }}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Bike Image */}
            <img
              src={bike.bike_image}
              alt={bike.bike_name}
              className="w-full h-52 object-cover"
            />
            {/* Bike Details */}
            <div className="p-4  ">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">{bike.bike_name}</h2>
              <p className="text-gray-500 text-sm mb-4">{bike.description}</p>
              <div className="flex justify-between items-center text-sm mt-3">
                <span className="text-blue-700 font-bold">${bike.bike_price}</span>
                <span className="text-green-600">{bike.bike_mileage} km/l</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={handleViewMoreClick}
        className="bg-blue-500 text-white px-8 py-3 rounded-full mt-6 hover:bg-blue-600 transition-colors duration-300"
      >
        View More Bikes
      </button>
    </div>
  );
};

export default TopBikes;
