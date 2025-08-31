import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const HotelCard = ({ hotel }) => {
  if (!hotel) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
        <div className="text-center text-cyan-700">
          <FaStar className="text-3xl mx-auto mb-2" />
          <span className="text-sm">Hotel Image</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{hotel.hotel?.name || 'Unknown Hotel'}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <FaMapMarkerAlt className="mr-1" />
          <span>{hotel.hotel?.address?.cityName || 'Unknown location'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-cyan-600">
            ${hotel.offers?.[0]?.price?.total || 'N/A'}
          </span>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;