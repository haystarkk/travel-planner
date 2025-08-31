import React from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (destination && destination.iataCode && destination.name && destination.address?.countryCode) {
      navigate(`/destination/${destination.iataCode}/${encodeURIComponent(destination.name)}/${destination.address.countryCode}`);
    }
  };

  // Safe data access with fallbacks
  const cityName = destination?.name || 'Unknown City';
  const countryCode = destination?.address?.countryCode || 'N/A';
  const cityCode = destination?.iataCode || '';

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
        <div className="text-center text-cyan-700">
          <span className="text-6xl">🌍</span>
          <p className="text-sm mt-2">Destination Image</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {cityName}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
            {countryCode}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Click for details →
          </p>
          <span className="text-xs text-cyan-600 font-medium">
            {cityCode}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;