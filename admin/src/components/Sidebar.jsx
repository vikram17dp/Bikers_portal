import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaUserPlus, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  // State to track if sidebar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-4 md:px-8 cursor-pointer 
    ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary text-primary" : ""}`;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`min-h-screen w-${isCollapsed ? "20" : "60"} bg-white shadow-md border-r transition-all duration-300`}
    >
      {/* Sidebar header to trigger toggle */}
      <div className="flex justify-center mt-5">
        <button
          onClick={toggleSidebar}
          className="text-xl cursor-pointer"
        >
          {isCollapsed ? "☰" : "X"}
        </button>
      </div>

      <ul className="text-[#515151] mt-5">
        <NavLink to="/admin-dashboard" className={linkClass}>
          <FaHome size={20} />
          {!isCollapsed && <p className="hidden md:block">Admin Dashboard</p>}
        </NavLink>
        <NavLink to="/user-management" className={linkClass}>
          <FaUser size={20} />
          {!isCollapsed && <p className="hidden md:block">User Management</p>}
        </NavLink>
        <NavLink to="/add-items" className={linkClass}>
          <FaUserPlus size={20} />
          {!isCollapsed && <p className="hidden md:block">Add List</p>}
        </NavLink>
        <NavLink to="/all-items" className={linkClass}>
          <FaUsers size={20} />
          {!isCollapsed && <p className="hidden md:block">Bikers List</p>}
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
