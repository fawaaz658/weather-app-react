import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    main: { temp, humidity, feels_like },
    weather,
    wind: { speed },
  } = weatherData;

  const celsiusTemp = (temp - 273.15).toFixed(1);
  const celsiusFeelsLike = (feels_like - 273.15).toFixed(1);

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt={weather[0].description}
        />
        <p>{weather[0].description}</p>
      </div>
      <div className="weather-info">
        <p>Temperature: {celsiusTemp}°C</p>
        <p>Feels like: {celsiusFeelsLike}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
