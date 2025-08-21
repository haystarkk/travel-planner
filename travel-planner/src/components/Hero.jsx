import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-white max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your Next Journey</h1>
        <p className="text-xl mb-10">Explore destinations, plan your trip, and create unforgettable memories.</p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto">
          <div className="relative flex-grow w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search for a city, landmark, or activity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-6 rounded-l-full sm:rounded-r-none rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-6 bg-cyan-500 text-white rounded-r-full hover:bg-cyan-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 sm:relative sm:ml-2 sm:mt-0 mt-4 sm:rounded-full"
            >
              <FaSearch className="inline-block mr-2" /> Search
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Hero;