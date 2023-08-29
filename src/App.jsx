import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";

function App() {
  const [state, setState] = useState("Texas");
  const [weatherData, setWeatherData] = useState({});

  return (
    <div>
      <SearchBox setState={setState} />
      <ShowWeather
        state={state}
        setState={setState}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
    </div>
  );
}

export default App;
