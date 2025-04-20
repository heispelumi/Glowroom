// import React, { useState } from 'react';
import { useState } from 'react';
import { FaBell, FaAngleDoubleLeft, FaAngleDoubleRight, FaSearch, FaChevronDown } from 'react-icons/fa';

const Topbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [today] = useState(new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }));

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="bg-pink-700 px-6 py-4 flex justify-between items-center shadow-md text-white">
      {/* Left: Brand + Sidebar Toggle */}
      <div className="flex items-center gap-4">
        <button className="text-xl" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>
        <div>
          <h1 className="text-xl font-bold tracking-wide">Glowroom Admin</h1>
          <p className="text-sm text-pink-200">{today}</p>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className=" hidden md:flex items-center bg-white rounded-lg px-4 py-2 w-1/3">
        <FaSearch className="text-pink-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-none outline-none text-sm pl-2 text-gray-600"
        />
      </div>

      {/* Right: User Avatar, Notifications, and Profile */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <button className="relative text-xl">
            <FaBell />
            {/* Optional Notification Dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 bg-white rounded-full ring-2 ring-pink-700"></span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div>
            <p className="text-sm text-pink-200">{greeting()}</p>
            <h2 className="font-semibold text-white">Hello, Admin</h2>
          </div>

          {/* Avatar and Dropdown */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-400 flex justify-center items-center text-white font-bold text-lg shadow-md">
              A
            </div>
            <FaChevronDown className="text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
