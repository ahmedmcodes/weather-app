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
    <div
      className=" flex flex-col justify-items-center items-center m-20 bg-transparent border rounded border-white shadow-md shadow-orange-400 backdrop-blur-sm"
      // style={{ backdropFilter: "blur(20px)" }}
    >
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
