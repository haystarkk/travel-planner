export const config = {
  isProduction: import.meta.env.PROD,
  api: {
    baseURL: import.meta.env.PROD 
      ? 'https://api.amadeus.com' 
      : 'https://test.api.amadeus.com'
  }
};