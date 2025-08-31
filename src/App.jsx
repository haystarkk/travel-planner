import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/UI/LoadingSpinner';
import { getAmadeusToken } from './services/amadeusApi';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Destination = lazy(() => import('./pages/Destination'));
const Itinerary = lazy(() => import('./pages/Itinerary'));

const testAmadeusAPI = async () => {
  try {
    const token = await getAmadeusToken();
    console.log('Amadeus API token obtained successfully');
    
    const flightResponse = await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=NYC&destinationLocationCode=LON&departureDate=2024-01-01&adults=1', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (flightResponse.ok) {
      const flightData = await flightResponse.json();
      console.log('Flight search successful:', flightData);
      alert('Amadeus API is working! Check console for details.');
    } else {
      throw new Error('Flight search failed');
    }
  } catch (error) {
    console.error('Amadeus API test failed:', error);
    alert('API test failed. Check console for errors.');
  }
};

function App() {
  useEffect(() => {
    console.log('Amadeus Client ID:', import.meta.env.VITE_AMADEUS_CLIENT_ID ? 'Loaded' : 'Missing');
    console.log('Amadeus Secret:', import.meta.env.VITE_AMADEUS_CLIENT_SECRET ? 'Loaded' : 'Missing');
  }, []);

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/destination/:cityCode/:cityName/:countryCode" element={<Destination />} />
            <Route path="/itinerary" element={<Itinerary />} />
          </Routes>
        </Suspense>
        
        <button 
          onClick={testAmadeusAPI}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Test API
        </button>
      </div>
    </Router>
  );
}

export default App;