import axios from 'axios';

// For OpenTripMap (FREE - no key needed)
const API_BASE_URL = 'https://api.opentripmap.com/0.1/en/places';

export const searchDestinations = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/autosuggest`, {
      params: {
        name: query,
        apikey: 'YOUR_API_KEY', // Replace with actual key
        limit: 10
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};