import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedDestinations = () => {
  const navigate = useNavigate();
  
  // Sample featured destinations (will replace with real API data)
  const featuredCities = [
    { id: 1, name: 'Paris', country: 'France', code: 'PAR', description: 'City of Light and romance' },
    { id: 2, name: 'Tokyo', country: 'Japan', code: 'TYO', description: 'Modern meets traditional' },
    { id: 3, name: 'New York', country: 'USA', code: 'NYC', description: 'The Big Apple' },
    { id: 4, name: 'London', country: 'UK', code: 'LON', description: 'Historic and vibrant' },
    { id: 5, name: 'Dubai', country: 'UAE', code: 'DXB', description: 'Desert luxury' },
    { id: 6, name: 'Sydney', country: 'Australia', code: 'SYD', description: 'Harbor beauty' }
  ];

  const handleDestinationClick = (city) => {
    navigate(`/destination/${city.code}/${encodeURIComponent(city.name)}/${city.country}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          🌟 Featured Destinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCities.map((city) => (
            <div 
              key={city.id}
              onClick={() => handleDestinationClick(city)}
              className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-cyan-200"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🌍</div>
                <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
                <p className="text-cyan-600 font-medium">{city.country}</p>
              </div>
              
              <p className="text-gray-600 text-sm text-center mb-4">
                {city.description}
              </p>
              
              <div className="text-center">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                  Explore {city.name} →
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Code: {city.code}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to plan your next adventure?
          </p>
          <button 
            onClick={() => navigate('/itinerary')}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all"
          >
            🗓️ Start Planning My Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;