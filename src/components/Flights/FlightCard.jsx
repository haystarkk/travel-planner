import React from 'react';
import { FaPlane, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const FlightCard = ({ flight }) => {
  if (!flight) return null;

  const formatTime = (dateTime) => {
    return new Date(dateTime).toLocaleTimeString([], { 
      hour: '2-digit', minute: '2-digit' 
    });
  };

  const formatDuration = (duration) => {
    return duration.replace('PT', '').toLowerCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <FaPlane className="text-cyan-600 text-xl" />
          <span className="font-semibold text-gray-800">
            {flight.itineraries[0].segments[0].carrierCode} {flight.itineraries[0].segments[0].number}
          </span>
        </div>
        <div className="text-2xl font-bold text-cyan-600">
          ${flight.price?.total || 'N/A'}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">
            {flight.itineraries[0].segments[0].departure?.at ? 
              formatTime(flight.itineraries[0].segments[0].departure.at) : 'N/A'}
          </div>
          <div className="text-sm text-gray-600">{flight.itineraries[0].segments[0].departure?.iataCode}</div>
        </div>

        <div className="flex flex-col items-center mx-4">
          <div className="flex items-center text-gray-500 text-sm">
            <FaClock className="mr-1" />
            {flight.itineraries[0].duration ? formatDuration(flight.itineraries[0].duration) : 'N/A'}
          </div>
          <div className="w-24 h-px bg-gray-300 my-2"></div>
          <div className="text-xs text-gray-500">Direct</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">
            {flight.itineraries[0].segments[0].arrival?.at ? 
              formatTime(flight.itineraries[0].segments[0].arrival.at) : 'N/A'}
          </div>
          <div className="text-sm text-gray-600">{flight.itineraries[0].segments[0].arrival?.iataCode}</div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>{flight.itineraries[0].segments[0].carrierCode} Airlines</span>
        <span>{flight.numberOfBookableSeats || 'N/A'} seats left</span>
      </div>

      <button className="w-full mt-4 bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
        Select Flight
      </button>
    </div>
  );
};

export default FlightCard;