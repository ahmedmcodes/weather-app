import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShowWeather = ({ state, weatherData, setWeatherData }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  const [loading, setLoading] = useState(true);

  // console.log(state);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      });
  }, [apiUrl]);

  console.log(weatherData);

  const kelvinToCelcuis = (kelvin) => {
    return (kelvin - 273.1).toFixed(1);
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      {weatherData && (
        <>
          <h1>{weatherData.name}</h1>
          <h2>
            Temprature:
            {weatherData.main ? kelvinToCelcuis(weatherData.main.temp) : null} C
          </h2>
          <h2></h2>
        </>
      )}
    </div>
  );
};

ShowWeather.propTypes = {
  state: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired,
  setWeatherData: PropTypes.func.isRequired,
};

export default ShowWeather;
