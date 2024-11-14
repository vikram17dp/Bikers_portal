import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { portal_list } from "../../assets/assets";
import { FaPlay } from "react-icons/fa";

const Particularitem = () => {
  const { id, category } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  console.log(category);

  useEffect(() => {
    const item = portal_list.find((item) => item._id === id);
    if (item) {
      setItemDetails(item);
    }
  }, [id]);

  if (!itemDetails) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const handleVideoPopup = () => {
    setShowVideo(true);
  };

  const closeVideoPopup = () => {
    setShowVideo(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-center">
        <span className="text-red-600 font-sans text-4xl">
          {itemDetails.category} Name:
        </span>{" "}
        <span className="text-2xl font-script text-gray-500">
          {itemDetails[`${itemDetails.category.toLowerCase()}_name`]}
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={itemDetails[`${itemDetails.category.toLowerCase()}_image`]}
            alt={itemDetails[`${itemDetails.category.toLowerCase()}_name`]}
            className="w-full max-h-[100vh] mt-4 object-cover rounded-lg shadow-lg sm:mt-4"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4 mt-4 ">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-blue-500">Description:</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {itemDetails.description}
            </p>

            <div className="text-gray-500 space-y-3 border-t border-gray-300 pt-4 ">
              <p className="text-xl">
                <span className="font-bold text-blue-500">Price:</span> ₹
                {itemDetails[`${itemDetails.category.toLowerCase()}_price`]}
              </p>
              {itemDetails.brand && (
                <p>
                  <span className="font-bold text-blue-500">Brand:</span>{" "}
                  {itemDetails.brand}
                </p>
              )}
              {itemDetails.year && (
                <p>
                  <span className="font-bold text-blue-500">Year:</span>{" "}
                  {itemDetails.year}
                </p>
              )}
              {itemDetails.engine_capacity && (
                <p>
                  <span className="font-bold text-blue-500">
                    Engine Capacity:
                  </span>{" "}
                  {itemDetails.engine_capacity}
                </p>
              )}
              {itemDetails.fuel_type && (
                <p>
                  <span className="font-bold text-blue-500">Fuel Type:</span>{" "}
                  {itemDetails.fuel_type}
                </p>
              )}
              {itemDetails.weight && (
                <p>
                  <span className="font-bold text-blue-500">Weight:</span>{" "}
                  {itemDetails.weight}
                </p>
              )}
              {itemDetails.top_speed && (
                <p>
                  <span className="font-bold text-blue-500">Top Speed:</span>{" "}
                  {itemDetails.top_speed}
                </p>
              )}
              {itemDetails.bike_mileage && (
                <p>
                  <span className="font-bold text-blue-500">Bike Mileage:</span>{" "}
                  {itemDetails.bike_mileage}
                </p>
              )}
              {itemDetails.compatibility && (
                <p>
                  <span className="font-bold text-blue-500">
                    Compatibility:
                  </span>{" "}
                  {itemDetails.compatibility}
                </p>
              )}
              {itemDetails.features && itemDetails.features.length > 0 && (
                <div>
                  <p className="text-xl font-bold text-blue-500">Features:</p>
                  <ul className="list-disc pl-5 space-y-3 mt-3 ">
                    {itemDetails.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 text-sm font-sans   ">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Video Button */}
          {itemDetails.video_url && (
            <button
              onClick={handleVideoPopup}
              className="bg-red-600 text-white py-3 px-5 mt-6 rounded-lg flex items-center gap-2 hover:bg-red-700 transition self-start"
            >
              <FaPlay /> Watch Video
            </button>
          )}
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={closeVideoPopup}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-800 hover:bg-gray-300"
            >
              ✖
            </button>
            <iframe
              width="100%"
              height="500"
              src={itemDetails.video_url}
              title="Bike Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Particularitem;
