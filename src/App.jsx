import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";
import WeatherForecast from "./components/weather-forecast.component";

function App() {
  const [state, setState] = useState("Texas");
  const [weatherData, setWeatherData] = useState({});

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.1).toFixed(1);
  };

  return (
    <div>
      <SearchBox setState={setState} />
      <ShowWeather
        state={state}
        setState={setState}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        kelvinToCelsius={kelvinToCelsius}
      />
      <WeatherForecast state={state} />
    </div>
  );
}

export default App;
