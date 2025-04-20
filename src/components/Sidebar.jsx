import { NavLink } from 'react-router-dom';
import {
  FaChartBar,
  FaUsers,
  FaBoxes,
  FaCog,
  FaTachometerAlt,
  FaUserCircle,
  FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = ({ isOpen, isMobile, userName }) => {
  const navItems = [
    { to: '/', icon: <FaTachometerAlt />, label: 'Dashboard' },
    { to: '/analytics', icon: <FaChartBar />, label: 'Analytics' },
    { to: '/products', icon: <FaBoxes />, label: 'Products' },
    { to: '/customers', icon: <FaUsers />, label: 'Customers' },
    { to: '/settings', icon: <FaCog />, label: 'Settings' },
  ];

  const mobileTranslate = isMobile
    ? isOpen
      ? 'translate-x-0'
      : '-translate-x-full'
    : '';

  const widthClass = isMobile
    ? 'w-64'
    : isOpen
    ? 'w-64'
    : 'w-24';

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-[#FFE4E1] shadow-md p-4 poppins z-50
        transform transition-transform duration-300
        ${widthClass}
        ${mobileTranslate}
        ${!isMobile ? 'sm:static sm:block' : ''}
      `}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1
          className={`text-xl logo text-[#B3446C] tracking-wide transition-opacity duration-200 ${
            isOpen ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          Glowroom
        </h1>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-pink-400 flex justify-center items-center text-white text-lg">
          <FaUserCircle />
        </div>
        {isOpen && (
          <div>
            <p className="text-sm text-pink-600">{userName || 'Admin'}</p>
            <p className="text-xs text-gray-600">Administrator</p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="space-y-3">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-pink-200 text-pink-900 font-semibold'
                  : 'text-gray-700 hover:bg-pink-100 hover:text-pink-700'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="absolute bottom-0 w-full p-4">
        <button
          onClick={() => alert('Logging out...')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-pink-100 hover:text-red-700 mt-4 transition-all duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          {isOpen && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
