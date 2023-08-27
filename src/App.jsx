import { useState } from "react";
import "./App.css";
import ShowWeather from "./components/weather-shower.component";
import SearchBox from "./components/search-box.component";

function App() {
  const [state, setState] = useState("Texas");
  const [weatherData, setWeatherData] = useState({});

  return (
    <>
      <h1> Hello World</h1>
      <SearchBox setState={setState} />
      <ShowWeather
        state={state}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
    </>
  );
}

export default App;
