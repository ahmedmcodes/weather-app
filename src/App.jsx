import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";
import WeatherForecast from "./components/weather-forecast.component";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [lonLat, setLonLat] = useState({ lon: 2.3522, lat: 48.8566 });

  //States for CSS Styling
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative my-5 bg-transparent border rounded-2xl border-white shadow-md shadow-orange-400  backdrop-blur font-font">
      <div className="flex flex-col justify-items-center items-center">
        <SearchBox
          setCityName={setCityName}
          focus={focus}
          setFocus={setFocus}
        />
      </div>
      <div
        className={
          focus
            ? "my-5 mx-5 grid grid-cols-4 gap-10 blur-sm transition-all duration-1000"
            : "my-5 mx-5 grid grid-cols-4 gap-10 blur-none duration-1000 "
        }
      >
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
    </div>
  );
}

export default App;
