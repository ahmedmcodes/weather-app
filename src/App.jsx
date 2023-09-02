import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";
import WeatherForecast from "./components/weather-forecast.component";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [lonLat, setLonLat] = useState({ lon: 2.3522, lat: 48.8566 });

  return (
    <div>
      <SearchBox setCityName={setCityName} />
      <ShowWeather
        cityName={cityName}
        setCityName={setCityName}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        lonLat={lonLat}
        setLonLat={setLonLat}
      />
      <WeatherForecast
        cityName={cityName}
        lonLat={lonLat}
        weatherData={weatherData}
      />
    </div>
  );
}

export default App;
