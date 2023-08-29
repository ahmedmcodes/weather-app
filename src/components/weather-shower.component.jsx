import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";

const ShowWeather = ({
  state,
  weatherData,
  setWeatherData,
  setState,
  kelvinToCelsius,
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  useEffect(() => {
    {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          // setLoading(false);
        });
    }
  }, [apiUrl]);

  console.log(weatherData);

  if (weatherData.cod === "404") {
    return <h1>city not found</h1>;
  } else if (weatherData.main === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h1>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <h2>
            Temprature:
            {kelvinToCelsius(weatherData.main.temp)}&deg;C
          </h2>
          <h2>Description: {weatherData.weather[0].main} </h2>
          <h2>Date: {moment().format("LL")} </h2>
          <h2>Humidity: {weatherData.main.humidity}% </h2>
        </div>
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
