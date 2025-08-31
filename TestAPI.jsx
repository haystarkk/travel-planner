// TestAPI.jsx
import React, { useEffect, useState } from 'react';

const TestAPI = () => {
  const [status, setStatus] = useState({});
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Test if environment variables are loaded
    setStatus({
      amadeusClientId: import.meta.env.VITE_AMADEUS_CLIENT_ID ? '■ Loaded' : '✗ Missing',
      amadeusSecret: import.meta.env.VITE_AMADEUS_CLIENT_SECRET ? '■ Loaded' : '✗ Missing',
      weatherKey: import.meta.env.VITE_OPENWEATHER_API_KEY ? '■ Loaded' : '✗ Missing'
    });

    // Test Weather API
    if (import.meta.env.VITE_OPENWEATHER_API_KEY) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('Weather API Error:', error));
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>API Connection Test</h2>
      <div>
        <h3>Environment Variables:</h3>
        <pre>{JSON.stringify(status, null, 2)}</pre>
      </div>
      <div>
        <h3>Weather API Test:</h3>
        <pre>{weather ? JSON.stringify(weather, null, 2) : 'Testing...'}</pre>
      </div>
    </div>
  );
};

export default TestAPI;