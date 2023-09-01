import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";
import WeatherForecast from "./components/weather-forecast.component";
import LocationFetcher from "./components/lon-lat.component";
import ShowCity from "./components/cities.component";

function App() {
  const [state, setState] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [lon, setLon] = useState(2.3522);
  const [lat, setLat] = useState(48.8566);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.1).toFixed(1);
  };

  return (
    <div>
      {/*
      <SearchBox setState={setState} />
      <ShowWeather
        state={state}
        setState={setState}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        kelvinToCelsius={kelvinToCelsius}
        lat={lat}
        setLat={setLat}
        setLon={setLon}
        lon={lon}
      />
      <WeatherForecast
        state={state}
        kelvinToCelsius={kelvinToCelsius}
        lat={lat}
        setLat={setLat}
        setLon={setLon}
        lon={lon}
        weatherData={weatherData}
  /> */}
      <ShowCity />
    </div>
  );
}

export default App;
