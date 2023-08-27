import { useEffect } from "react";
import PropTypes from "prop-types";
const ShowWeather = ({ state, weatherData, setWeatherData }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  console.log(state);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [apiUrl]);
  console.log(weatherData);

  return <h1>{weatherData.name}</h1>;
};

ShowWeather.propTypes = {
  state: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired,
  setWeatherData: PropTypes.func.isRequired,
};

export default ShowWeather;
