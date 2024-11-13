import React from 'react';
import { assets } from "../assets/assets.js";

const Contact = () => {
  return (
    <div className="container mx-auto px-5">
      {/* Contact Us Section */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Contact Details and Image */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-12 mb-28 text-sm">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="max-w-[360px] object-cover rounded-lg shadow-lg"
            src={assets.bike8}
            alt="Contact BikersPortal"
          />
        </div>

        {/* Right Side - Contact Information */}
        <div className="md:w-1/2 flex flex-col justify-center items-start gap-6 text-left text-gray-600">
          <p className="font-semibold text-lg text-gray-800">OUR OFFICE</p>
          <p className="text-gray-500">
            1234 Adventure Road <br />
            Suite 567, San Francisco, CA, USA
          </p>
          <p className="text-gray-500">
            Tel: (123) 456-7890 <br />
            Email: support@bikersportal.com
          </p>
          <p className="font-semibold text-lg text-gray-800">JOIN OUR TEAM</p>
          <p>Passionate about bikes? Explore our career opportunities.</p>
          <button className="border border-blue-500 px-6 py-3 text-sm text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
