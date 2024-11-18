import { useState, useEffect } from "react";
import { ChevronRight, DollarSign, Gauge } from 'lucide-react';
import { portal_list } from '../../assets/assets';
import { useNavigate } from "react-router-dom";

export default function AllItems() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    setItems(portal_list);
  }, []);

  const navigateToItemDetails = (id) => {
    navigate(`/all-items/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-500 mb-2 text-center">Your Collection</h1>
        <p className="text-sm text-gray-600 mb-12 text-center">Manage and explore your diverse inventory</p>

        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* Image and Category Label */}
              <div className="relative">
                <img
                  src={item[`${item.category.toLowerCase()}_image`]}
                  alt={item[`${item.category.toLowerCase()}_name`]}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Item Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item[`${item.category.toLowerCase()}_name`]}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center text-sm">
                  {/* Price */}
                  <div className="flex items-center text-blue-600">
                    <span className="font-bold">₹{item[`${item.category.toLowerCase()}_price`]}</span>
                  </div>

                  {/* Mileage (if exists) */}
                  {item.bike_mileage && (
                    <div className="flex items-center text-green-600">
                      <Gauge className="w-4 h-4 mr-1" />
                      <span>{item.bike_mileage}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <div
                className="px-6 py-4 bg-gray-50 flex justify-end items-center cursor-pointer group"
                onClick={() => navigateToItemDetails(item._id)}
              >
                <span className="text-blue-600 font-semibold group-hover:underline">Edit</span>
                <ChevronRight className="w-5 h-5 text-blue-600 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  