import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../components/SearchResults/DestinationCard';
import { searchCities } from '../services/amadeusApi';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      if (query && query.trim().length > 2) {
        setLoading(true);
        setError('');
        try {
          // Try real API first
          const data = await searchCities(query);
          setResults(data || []);
        } catch (err) {
          // Fallback to mock data if API fails
          console.log('API failed, using mock data');
          setResults(getMockSearchResults(query));
        }
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const getMockSearchResults = (searchQuery) => {
    const allCities = [
      { id: 1, name: 'Tokyo', iataCode: 'TYO', address: { countryCode: 'JP' } },
      { id: 2, name: 'Paris', iataCode: 'PAR', address: { countryCode: 'FR' } },
      { id: 3, name: 'New York', iataCode: 'NYC', address: { countryCode: 'US' } },
      { id: 4, name: 'London', iataCode: 'LON', address: { countryCode: 'UK' } },
      { id: 5, name: 'Dubai', iataCode: 'DXB', address: { countryCode: 'AE' } },
      { id: 6, name: 'Sydney', iataCode: 'SYD', address: { countryCode: 'AU' } }
    ];

    return allCities.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.iataCode.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  if (loading) return <LoadingSpinner />;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {query ? `Search Results for "${query}"` : 'Search Destinations'}
      </h1>
      
      {results.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 text-lg mb-2">
            {query ? `No destinations found for "${query}"` : 'Search for destinations above'}
          </p>
          <p className="text-gray-500 text-sm">
            Try searching for popular cities like "Paris", "London", or "Tokyo"
          </p>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-6">
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((destination, index) => (
              <DestinationCard 
                key={destination.id || index} 
                destination={destination}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;