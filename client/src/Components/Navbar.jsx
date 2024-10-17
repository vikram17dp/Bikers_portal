import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-600 h-16 flex items-center justify-between px-4">
      <div>
        <Link to='/'>
        <img src={assets.Logo}  className="w-20 h-14 rounded-full ml-12" alt="Logo" />
        </Link>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="flex space-x-24">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/signin" className='text-white'>Signin</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
