# Quick Start Instructions

## Before running the app:

1. **Get API Key:**
   - Visit https://openweathermap.org/api
   - Create a free account and get your API key

2. **Set API Key:**
   - Open `.env` file
   - Replace `your_api_key_here` with your actual API key
   - Save the file

3. **Restart Development Server:**
   - If the dev server is running, stop it (Ctrl+C)
   - Run: `npm start`

4. **Open in Browser:**
   - App opens automatically at http://localhost:3000
   - Or manually navigate to that URL

## Usage:

- Type a city name in the search box
- Click "Search" button or press Enter
- View the weather information displayed

## File Structure:

```
src/
├── components/
│   ├── SearchBar.js      # Search component
│   ├── WeatherCard.js    # Weather display
│   └── ForecastCard.js   # Forecast display (bonus)
├── App.js                # Main component
└── App.css               # Styles
```

## Common Issues:

**"City not found"** → Check spelling and try full city name
**No data showing** → Verify API key in .env file
**Restart needed** → Stop/start dev server after .env changes

For detailed help, see SETUP_GUIDE.md
