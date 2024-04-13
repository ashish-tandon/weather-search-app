import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Middle = () => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // State to store loading status
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch weather data
  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.example.com/weather', {
        params: {
          // Add parameters for location search
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setIsLoading(false);
  };

  // Effect to fetch weather data on component mount (simulate initial load)
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="middle-section">
      <h2>Weather Details</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Humidity: {weatherData.humidity}</p>
          {/* Display additional weather details */}
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default Middle;
