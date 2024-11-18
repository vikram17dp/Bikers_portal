import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaUserPlus, FaUsers } from "react-icons/fa";

const Sidebar = () => {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-4 md:px-8 cursor-pointer 
    ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary text-primary" : ""}`;

  return (
    <div className="min-h-screen w-60 bg-white shadow-md border-r">
      
        <ul className="text-[#515151] mt-5">
          <NavLink to="/admin-dashboard" className={linkClass}>
            <FaHome size={20} />
            <p className="hidden md:block">Admin Dashboard</p>
          </NavLink>
          <NavLink to="/user-management" className={linkClass}>
            <FaUser size={20} />
            <p className="hidden md:block">User Management</p>
          </NavLink>
          <NavLink to="/add-biker" className={linkClass}>
            <FaUserPlus size={20} />
            <p className="hidden md:block">Add Biker</p>
          </NavLink>
          <NavLink to="/biker-list" className={linkClass}>
            <FaUsers size={20} />
            <p className="hidden md:block">Bikers List</p>
          </NavLink>
        </ul>
      
    </div>
  );
};

export default Sidebar;
