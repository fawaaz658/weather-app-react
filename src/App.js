import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'City not found');
      setWeatherData(null);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
