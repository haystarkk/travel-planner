import React from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherWidget = ({ weather }) => {
  if (!weather) return null;

  const getWeatherIcon = (main) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <WiDaySunny className="text-yellow-500 text-4xl" />;
      case 'rain':
        return <WiRain className="text-blue-500 text-4xl" />;
      case 'clouds':
        return <WiCloudy className="text-gray-500 text-4xl" />;
      case 'snow':
        return <WiSnow className="text-blue-300 text-4xl" />;
      case 'thunderstorm':
        return <WiThunderstorm className="text-purple-500 text-4xl" />;
      default:
        return <WiDaySunny className="text-yellow-500 text-4xl" />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <WiDaySunny className="mr-2 text-2xl" />
        Current Weather in {weather.name}
      </h3>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getWeatherIcon(weather.weather[0].main)}
          <div className="ml-4">
            <div className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</div>
            <div className="text-sm opacity-90">{weather.weather[0].description}</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm opacity-90">
            <span className="font-medium">Feels like:</span> {Math.round(weather.main.feels_like)}°C
          </div>
          <div className="text-sm opacity-90 mt-1">
            <span className="font-medium">Humidity:</span> {weather.main.humidity}%
          </div>
          <div className="text-sm opacity-90 mt-1">
            <span className="font-medium">Wind:</span> {weather.wind.speed} m/s
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium">Min:</span> {Math.round(weather.main.temp_min)}°C
          </div>
          <div>
            <span className="font-medium">Max:</span> {Math.round(weather.main.temp_max)}°C
          </div>
          <div>
            <span className="font-medium">Pressure:</span> {weather.main.pressure}hPa
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;