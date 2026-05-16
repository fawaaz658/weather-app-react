# Weather App - Setup Guide

This is a React Weather Application that fetches real-time weather data using the OpenWeatherMap API.

## Prerequisites

- Node.js and npm installed
- Visual Studio Code (recommended)
- OpenWeatherMap API key (free tier available)

## Getting Started

### 1. Get Your API Key

1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to your API Keys section in your profile
4. Copy your default API key

### 2. Configure Environment Variables

1. Open the `.env` file in the root directory of the project
2. Replace `your_api_key_here` with your actual OpenWeatherMap API key:

```
REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
```

**Important:** After adding the API key, you must restart the development server.

### 3. Install Dependencies (if not already done)

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The app will automatically open at http://localhost:3000

## Features

- **Search for Cities:** Enter any city name to get current weather data
- **Real-time Weather Data:** Displays temperature, humidity, wind speed, and weather description
- **Beautiful UI:** Gradient background with smooth animations
- **Error Handling:** Displays helpful error messages for invalid cities
- **Loading States:** Shows loading indicator while fetching data

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.js      # Search input component
│   │   ├── WeatherCard.js    # Weather display component
│   │   └── ForecastCard.js   # Forecast display component (bonus)
│   ├── App.js                # Main app with API logic
│   ├── App.css               # Styling
│   └── index.js              # Entry point
├── .env                       # Environment variables
├── public/
└── package.json
```

## API Information

- **Endpoint:** https://api.openweathermap.org/data/2.5/weather
- **Temperature Unit:** Kelvin (converted to Celsius in the app)
- **Free Tier:** 60 calls/minute

## Troubleshooting

### API Key Issues
- Ensure `.env` file is in the root directory
- Restart the dev server after adding the API key
- Check that the key is correctly set with `REACT_APP_` prefix

### CORS Errors
- OpenWeatherMap API supports CORS, so no proxy is needed
- Check your internet connection
- Verify the API key is active and hasn't exceeded rate limits

### City Not Found
- Make sure the city name is spelled correctly
- Try using the full city name (e.g., "New York" instead of "NY")

### Missing Dependencies
- Run `npm install` again to ensure all packages are installed
- Try clearing the npm cache: `npm cache clean --force`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from create-react-app (irreversible)

## Bonus Features

The ForecastCard component is included for future use to display 5-day forecasts. To integrate it with the app, you'll need to:

1. Call the forecast API endpoint: `https://api.openweathermap.org/data/2.5/forecast`
2. Parse the forecast data
3. Pass it to the ForecastCard component

## Tips

- Use VS Code IntelliSense (Ctrl + Space) for suggestions
- Use Prettier extension to format code automatically
- Press F5 in VS Code to start debugging
- Check the browser console for helpful error messages

## Next Steps

- Add geolocation feature to show local weather
- Implement dark/light theme toggle
- Add unit conversion (Celsius/Fahrenheit)
- Deploy to Vercel or Netlify
- Add Redux for advanced state management

## Author

Dr. Isah Charles Saidu

## License

MIT
