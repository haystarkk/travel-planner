import React from 'react';
import { FaUmbrellaBeach, FaClipboardList } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-600">
            <FaUmbrellaBeach />
            <span>TravelPlanner</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`font-semibold transition duration-300 ${location.pathname === '/' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-600 hover:text-cyan-500'}`}
            >
              Home
            </Link>
            <Link
              to="/itinerary"
              className={`font-semibold transition duration-300 flex items-center space-x-1 ${location.pathname === '/itinerary' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-gray-600 hover:text-cyan-500'}`}
            >
              <FaClipboardList />
              <span>My Itinerary</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;