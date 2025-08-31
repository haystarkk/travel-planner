import React from 'react';
import ItineraryBuilder from '../components/Itinerary/ItineraryBuilder';

const Itinerary = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🗓️ My Travel Itinerary</h1>
          <p className="text-xl text-gray-600">Plan and manage your dream trip</p>
        </div>
        
        <ItineraryBuilder />
      </div>
    </div>
  );
};

export default Itinerary;
