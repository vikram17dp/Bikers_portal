import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <div className="container mx-auto px-5">
      {/* About Us Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* About Section with Left Image and Right Text */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[360px] object-cover rounded-lg shadow-lg"
            src={assets.bike8}
            alt="BikersPortal"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 p-4">
          <div className="flex flex-col gap-6 text-sm text-gray-600">
            <p>
              Welcome to BikersPortal, your ultimate destination for premium bike
              rentals and unforgettable rides. At BikersPortal, we know that every
              journey is unique, which is why we provide a diverse range of bikes
              to match your adventure needs, whether its for leisure or commuting.
            </p>
            <p>
              BikersPortal is dedicated to delivering top-notch biking experiences
              with exceptional customer service. We constantly upgrade our
              platform and fleet, integrating the latest models and user-friendly
              features to enhance your riding experience. From your first ride to
              your hundredth, BikersPortal is here to fuel your journey.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Our mission at BikersPortal is to make bike rentals easy, affordable,
              and accessible for everyone. We are committed to offering
              convenience, quality, and reliability, helping you explore the roads
              with confidence and freedom.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-8 text-center">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      {/* Why Choose Us Section with Left-Right Alignment */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
        {/* Feature 1 */}
        <div className="md:w-1/3 border p-14 flex flex-col gap-4 hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
          <b>FLEET VARIETY:</b>
          <p>
            Choose from a wide range of bikes, from cruisers to sport bikes, for
            every type of ride.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="md:w-1/3 border p-14 flex flex-col gap-4 hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
          <b>CONVENIENT BOOKING:</b>
          <p>
            Easy online booking with flexible pickup and drop-off options
            tailored to your schedule.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="md:w-1/3 border p-14 flex flex-col gap-4 hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
          <b>TRUSTED SERVICE:</b>
          <p>
            Well-maintained bikes with 24/7 support to ensure a hassle-free
            riding experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
