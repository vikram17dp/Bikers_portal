import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10 ml-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
        <p className="text-2xl font-cursive italic mt-1">BikersPortal</p>
          <p className="w-full mt-6 md:w-2/3 leading-6 text-gray-600">
            Here at BikersPortal, we are committed to providing you with the best biking experience. Our platform is open 24/7, ensuring that you can explore, book, and enjoy a ride whenever you need it. Whether its a weekend getaway or a daily commute, weve got you covered with a wide range of trusted bikes and services to match your needs. Get ready for an unforgettable ride with us!
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>+91-98459-86945</li>
            <li>contact@bikersportal.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ BikersPortal - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
