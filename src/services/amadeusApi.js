const AMADEUS_BASE_URL = 'https://test.api.amadeus.com/v2';

export const getAmadeusToken = async () => {
  const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_AMADEUS_CLIENT_ID,
      client_secret: import.meta.env.VITE_AMADEUS_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error('Authentication failed');
  }

  const data = await response.json();
  return data.access_token;
};

export const searchFlights = async (token, searchParams) => {
  const params = new URLSearchParams({
    originLocationCode: searchParams.origin,
    destinationLocationCode: searchParams.destination,
    departureDate: searchParams.departureDate,
    adults: searchParams.adults || 1,
    max: searchParams.maxResults || 10,
  });

  if (searchParams.returnDate) {
    params.append('returnDate', searchParams.returnDate);
  }

  const response = await fetch(`${AMADEUS_BASE_URL}/shopping/flight-offers?${params}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Flight search failed');
  }

  return await response.json();
};

export const searchHotels = async (token, cityCode) => {
  const response = await fetch(`${AMADEUS_BASE_URL}/shopping/hotel-offers?cityCode=${cityCode}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Hotel search failed');
  }

  return await response.json();
};