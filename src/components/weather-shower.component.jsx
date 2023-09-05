import { useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import kelvinToCelsius from "../functions";
import { VscLoading } from "react-icons/vsc";
import { WiDaySunny } from "react-icons/wi";

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
      }
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

    // setTimeout(() => {
    //   fetchData();
    // }, 3000);
  }, [apiUrl]);

  if (weatherData.cod === "404") {
    return <h1>City Not Found</h1>;
  } else if (weatherData.main === undefined) {
    return (
      <div className="flex flex-row font-bold">
        <VscLoading className="animate-spin text-2xl font-extrabold mr-2" />
        Loading
      </div>
    );
  }
  return (
    <div className="col-span-2 rounded-lg ">
      {weatherData && (
        <>
          <h1 className="text-center my-5 text-3xl">
            {weatherData.name} {weatherData.sys.country} {moment().format("LL")}
          </h1>
          <div className="grid grid-cols-2 my-5 mx-2">
            <p className="text-6xl my-5">
              {kelvinToCelsius(weatherData.main.temp)}&deg;C{" "}
            </p>
            <p className="text-5xl justify-self-end my-5">
              {weatherData.weather[0].main}
            </p>
            <WiDaySunny className="text-white text-6xl justify-self-center col-span-2 " />

            <p>Humidity: {weatherData.main.humidity}% </p>
          </div>
        </>
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
