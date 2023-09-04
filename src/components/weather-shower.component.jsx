import { useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import kelvinToCelsius from "../functions";
import {VscLoading} from "react-icons/vsc";

const ShowWeather = ({
  cityName,
  weatherData,
  setWeatherData,
  lonLat,
  setLonLat,
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  let apiUrl;
  if (cityName) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  } else {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lonLat.lat}&lon=${lonLat.lon}&appid=${apiKey}`;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLonLat({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      (error) => {
        console.log(error.message);
      },
    );

    const fetchData = async () => {
      try {
        const data = await fetch(apiUrl);
        const response = await data.json();
        setWeatherData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (weatherData.cod === "404") {
    return <h1>City Not Found</h1>;
  } else if (weatherData.main === undefined) {
    return (
      <div className='flex flex-row font-bold'>
      <VscLoading className="animate-spin text-2xl font-extrabold mr-2"/>
      Loading
      </div>
    )
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
  cityName: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired,
  setWeatherData: PropTypes.func.isRequired,
};

export default ShowWeather;
