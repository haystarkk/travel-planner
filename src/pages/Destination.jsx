import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPlane, FaHotel, FaUmbrellaBeach, FaCloudSun, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';

const Destination = () => {
  const { cityCode, cityName, countryCode } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Dynamic mock data based on city
  const getCityData = (cityName) => {
    const city = decodeURIComponent(cityName).toLowerCase();
    
    const cityData = {
      // Tokyo Data
      tokyo: {
        weather: { temperature: 22, condition: 'Partly Cloudy', humidity: 65, wind: 12, icon: '⛅' },
        description: "Tokyo, the vibrant capital of Japan, is a mesmerizing blend of ultramodern and traditional. From neon-lit skyscrapers to historic temples, this city offers an unforgettable experience for every traveler.",
        highlights: {
          cultural: ['Ancient temples and shrines', 'Traditional tea ceremonies', 'Beautiful cherry blossoms', 'Rich samurai history'],
          modern: ['Cutting-edge technology', 'World-class shopping', 'Michelin-starred restaurants', 'Efficient transportation']
        },
        flights: [
          { id: 1, airline: 'Japan Airlines', price: 850, duration: '14h 30m', departure: '09:00 AM', arrival: '02:30 PM' },
          { id: 2, airline: 'ANA', price: 920, duration: '13h 45m', departure: '11:30 AM', arrival: '04:15 PM' }
        ],
        hotels: [
          { id: 1, name: 'Park Hyatt Tokyo', price: 320, rating: 4.8, image: '🏨', features: ['Pool', 'Spa', '5-star'] },
          { id: 2, name: 'Shinjuku Granbell Hotel', price: 180, rating: 4.3, image: '🏢', features: ['City View', 'Restaurant'] }
        ],
        attractions: [
          { id: 1, name: 'Senso-ji Temple', type: 'Cultural', image: '⛩️', description: 'Ancient Buddhist temple' },
          { id: 2, name: 'Shibuya Crossing', type: 'Landmark', image: '🚦', description: 'World\'s busiest intersection' }
        ],
        travelTip: "The best time to visit Tokyo is during spring (March-May) for cherry blossoms or autumn (September-November) for pleasant weather and beautiful foliage."
      },

      // Paris Data
      paris: {
        weather: { temperature: 18, condition: 'Sunny', humidity: 55, wind: 8, icon: '☀️' },
        description: "Paris, the City of Light, is renowned for its art, fashion, gastronomy, and culture. The city's picturesque streets, world-class museums, and romantic atmosphere make it a dream destination.",
        highlights: {
          cultural: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Historic architecture'],
          modern: ['Fashion districts', 'Gourmet restaurants', 'Designer boutiques', 'Contemporary art']
        },
        flights: [
          { id: 1, airline: 'Air France', price: 650, duration: '8h 15m', departure: '10:30 AM', arrival: '08:45 PM' },
          { id: 2, airline: 'British Airways', price: 590, duration: '9h 30m', departure: '09:15 AM', arrival: '07:45 PM' }
        ],
        hotels: [
          { id: 1, name: 'Hôtel Ritz Paris', price: 950, rating: 4.9, image: '🏛️', features: ['Luxury', 'Spa', 'Historic'] },
          { id: 2, name: 'Hôtel du Louvre', price: 280, rating: 4.5, image: '🎨', features: ['Museum District', 'Classic'] }
        ],
        attractions: [
          { id: 1, name: 'Eiffel Tower', type: 'Landmark', image: '🗼', description: 'Iconic iron tower' },
          { id: 2, name: 'Louvre Museum', type: 'Museum', image: '🎨', description: 'World\'s largest art museum' }
        ],
        travelTip: "Visit Paris in spring (April-June) for mild weather and beautiful flowers, or autumn (September-October) for fewer crowds and romantic atmosphere."
      },

      // New York Data
      'new york': {
        weather: { temperature: 15, condition: 'Cloudy', humidity: 70, wind: 15, icon: '☁️' },
        description: "New York City, the Big Apple, is a bustling metropolis known for its iconic skyline, diverse culture, and endless energy. From Broadway shows to world-famous pizza, NYC has it all.",
        highlights: {
          cultural: ['Broadway shows', 'Museums', 'Statue of Liberty', 'Cultural diversity'],
          modern: ['Skyscrapers', 'Fashion', 'Tech startups', 'Nightlife']
        },
        flights: [
          { id: 1, airline: 'Delta Airlines', price: 420, duration: '7h 45m', departure: '08:00 AM', arrival: '04:45 PM' },
          { id: 2, airline: 'United Airlines', price: 380, duration: '8h 15m', departure: '10:30 AM', arrival: '07:45 PM' }
        ],
        hotels: [
          { id: 1, name: 'The Plaza Hotel', price: 750, rating: 4.8, image: '🏙️', features: ['Central Park', 'Luxury', 'Historic'] },
          { id: 2, name: 'Times Square Hotel', price: 220, rating: 4.2, image: '📊', features: ['Broadway', 'City View'] }
        ],
        attractions: [
          { id: 1, name: 'Statue of Liberty', type: 'Monument', image: '🗽', description: 'Iconic freedom statue' },
          { id: 2, name: 'Central Park', type: 'Nature', image: '🌳', description: 'Urban oasis in Manhattan' }
        ],
        travelTip: "The best times to visit NYC are April-June and September-November for pleasant weather. December is magical with Christmas decorations but very crowded."
      },

      // London Data
      london: {
        weather: { temperature: 12, condition: 'Rainy', humidity: 80, wind: 10, icon: '🌧️' },
        description: "London, a world capital of culture, finance, and history. From royal palaces to modern art, this city seamlessly blends centuries of history with contemporary innovation.",
        highlights: {
          cultural: ['Buckingham Palace', 'British Museum', 'West End shows', 'Royal history'],
          modern: ['Financial district', 'Tech scene', 'Designer shopping', 'Modern architecture']
        },
        flights: [
          { id: 1, airline: 'British Airways', price: 580, duration: '7h 30m', departure: '09:45 AM', arrival: '06:15 PM' },
          { id: 2, airline: 'Virgin Atlantic', price: 620, duration: '7h 15m', departure: '11:30 AM', arrival: '08:45 PM' }
        ],
        hotels: [
          { id: 1, name: 'The Savoy', price: 680, rating: 4.9, image: '🎩', features: ['Luxury', 'River View', 'Historic'] },
          { id: 2, name: 'The Z Hotel', price: 150, rating: 4.1, image: '💂', features: ['Central', 'Modern'] }
        ],
        attractions: [
          { id: 1, name: 'Buckingham Palace', type: 'Royal', image: '👑', description: 'Royal residence' },
          { id: 2, name: 'London Eye', type: 'Viewpoint', image: '🎡', description: 'Giant observation wheel' }
        ],
        travelTip: "Summer (June-August) has the best weather but biggest crowds. Spring (March-May) offers blooming flowers and milder crowds. Always carry an umbrella!"
      },

      // Dubai Data
      dubai: {
        weather: { temperature: 35, condition: 'Sunny', humidity: 40, wind: 5, icon: '🌞' },
        description: "Dubai, a city of superlatives with the world's tallest building, largest shopping mall, and most luxurious hotels. Experience ultimate luxury in the heart of the desert.",
        highlights: {
          cultural: ['Traditional souks', 'Desert heritage', 'Mosques', 'Arabic culture'],
          modern: ['Burj Khalifa', 'Luxury shopping', '7-star hotels', 'Futuristic architecture']
        },
        flights: [
          { id: 1, airline: 'Emirates', price: 950, duration: '16h 30m', departure: '10:00 PM', arrival: '08:30 PM' },
          { id: 2, airline: 'Etihad Airways', price: 880, duration: '15h 45m', departure: '09:30 PM', arrival: '07:15 PM' }
        ],
        hotels: [
          { id: 1, name: 'Burj Al Arab', price: 1500, rating: 5.0, image: '⛵', features: ['7-star', 'Private Beach', 'Luxury'] },
          { id: 2, name: 'Atlantis The Palm', price: 450, rating: 4.7, image: '🐠', features: ['Waterpark', 'Aquarium'] }
        ],
        attractions: [
          { id: 1, name: 'Burj Khalifa', type: 'Architecture', image: '🏙️', description: 'World\'s tallest building' },
          { id: 2, name: 'Dubai Mall', type: 'Shopping', image: '🛍️', description: 'Largest shopping mall' }
        ],
        travelTip: "Visit between November and March for pleasant weather. Avoid summer (June-August) when temperatures exceed 40°C. Dress modestly in traditional areas."
      },

      // Sydney Data
      sydney: {
        weather: { temperature: 25, condition: 'Clear', humidity: 60, wind: 20, icon: '🌊' },
        description: "Sydney, Australia's stunning harbor city known for its iconic opera house, beautiful beaches, and laid-back lifestyle. Perfect blend of urban sophistication and natural beauty.",
        highlights: {
          cultural: ['Aboriginal heritage', 'Opera House', 'Museums', 'Multicultural festivals'],
          modern: ['Harbor lifestyle', 'Beach culture', 'Modern dining', 'Coastal living']
        },
        flights: [
          { id: 1, airline: 'Qantas', price: 1200, duration: '22h 30m', departure: '08:00 PM', arrival: '07:30 AM' },
          { id: 2, airline: 'Virgin Australia', price: 1100, duration: '23h 15m', departure: '09:30 PM', arrival: '08:45 AM' }
        ],
        hotels: [
          { id: 1, name: 'Sydney Opera House Hotel', price: 380, rating: 4.6, image: '🎭', features: ['Harbor View', 'Luxury'] },
          { id: 2, name: 'Bondi Beach Hotel', price: 190, rating: 4.3, image: '🏄', features: ['Beachfront', 'Relaxed'] }
        ],
        attractions: [
          { id: 1, name: 'Sydney Opera House', type: 'Architecture', image: '🏛️', description: 'Iconic performing arts center' },
          { id: 2, name: 'Bondi Beach', type: 'Beach', image: '🏖️', description: 'World-famous surf beach' }
        ],
        travelTip: "Best time to visit is September-November and March-May for perfect weather. December-February is summer but can be very hot. Don't forget sunscreen!"
      }
    };

    // Return data for the specific city or default data
    return cityData[city] || {
      weather: { temperature: 20, condition: 'Clear', humidity: 50, wind: 10, icon: '🌤️' },
      description: `${decodeURIComponent(cityName)} is a beautiful destination waiting to be explored. Discover amazing experiences and create unforgettable memories in this wonderful place.`,
      highlights: {
        cultural: ['Local culture', 'Historical sites', 'Traditional cuisine', 'Cultural events'],
        modern: ['Modern attractions', 'Shopping districts', 'Contemporary dining', 'Urban experiences']
      },
      flights: [
        { id: 1, airline: 'Global Airlines', price: 500, duration: '10h 00m', departure: '10:00 AM', arrival: '08:00 PM' }
      ],
      hotels: [
        { id: 1, name: 'City Center Hotel', price: 150, rating: 4.0, image: '🏨', features: ['Central', 'Comfortable'] }
      ],
      attractions: [
        { id: 1, name: 'Main Attraction', type: 'Landmark', image: '📍', description: 'Must-visit location' }
      ],
      travelTip: "Research the best time to visit based on your preferences. Consider weather, crowds, and local events when planning your trip."
    };
  };

  const cityDisplayName = decodeURIComponent(cityName);
  const cityData = getCityData(cityName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Background */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
          <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{cityDisplayName}</h1>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {countryCode}
                </span>
                <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {cityCode}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{cityData.weather.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{cityData.weather.temperature}°C</h3>
                <p className="text-gray-600">{cityData.weather.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Humidity: {cityData.weather.humidity}%</p>
              <p className="text-sm text-gray-600">Wind: {cityData.weather.wind} km/h</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto space-x-2 mb-8 bg-white rounded-xl shadow-lg p-4">
          {['overview', 'flights', 'hotels', 'attractions', 'itinerary'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab === 'overview' && '🏠 Overview'}
              {tab === 'flights' && '✈️ Flights'}
              {tab === 'hotels' && '🏨 Hotels'}
              {tab === 'attractions' && '🏛️ Attractions'}
              {tab === 'itinerary' && '📅 Plan Trip'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to {cityDisplayName}! 🌸</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  {cityData.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">🎌 Cultural Highlights</h3>
                    <ul className="list-disc list-inside text-blue-700">
                      {cityData.highlights.cultural.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🏙️ Modern Attractions</h3>
                    <ul className="list-disc list-inside text-green-700">
                      {cityData.highlights.modern.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-yellow-800">
                    <strong>💡 Travel Tip:</strong> {cityData.travelTip}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flights' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">✈️ Available Flights</h2>
              <div className="space-y-4">
                {cityData.flights.map((flight) => (
                  <div key={flight.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-lg">{flight.airline}</span>
                      <span className="text-2xl font-bold text-green-600">${flight.price}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <strong>Duration:</strong> {flight.duration}
                      </div>
                      <div>
                        <strong>Departure:</strong> {flight.departure}
                      </div>
                      <div>
                        <strong>Arrival:</strong> {flight.arrival}
                      </div>
                      <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700">
                        Select Flight
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hotels' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🏨 Recommended Hotels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData.hotels.map((hotel) => (
                  <div key={hotel.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center text-4xl text-white">
                      {hotel.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(hotel.rating) ? 'fill-current' : 'text-gray-300'} />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({hotel.rating})</span>
                      </div>
                      <div className="mb-3">
                        <span className="text-2xl font-bold text-green-600">${hotel.price}</span>
                        <span className="text-sm text-gray-600"> / night</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {hotel.features.map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'attractions' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🏛️ Top Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityData.attractions.map((attraction) => (
                  <div key={attraction.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{attraction.image}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{attraction.name}</h3>
                        <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {attraction.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{attraction.description}</p>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded text-sm hover:bg-cyan-700">
                      Add to Itinerary
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">📅</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Plan Your Trip to {cityDisplayName}</h2>
              <p className="text-gray-600 mb-6">
                Ready to start planning? Add flights, hotels, and attractions to your itinerary!
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all">
                🗓️ Start Planning
              </button>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button 
            onClick={() => window.history.back()}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            ← Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destination;