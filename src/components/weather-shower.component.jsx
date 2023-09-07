import { useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import kelvinToCelsius from "../functions";
import { VscLoading } from "react-icons/vsc";
import { WiDaySunny, WiDayHaze } from "react-icons/wi";

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
    <div className="col-span-2 rounded-3xl bg-transparent  border hover:border-black drop-shadow-sm ">
      {weatherData && (
        <>
          <h1 className="text-center my-10 text-3xl mx-2">
            {weatherData.name} {weatherData.sys.country}
          </h1>
          <div className="grid grid-cols-2 my-5 mx-6">
            <p className="text-6xl my-5">
              {kelvinToCelsius(weatherData.main.temp)}&deg;C{" "}
            </p>
            <p className="text-5xl justify-self-end my-6">
              {weatherData.weather[0].main}
            </p>
            <p className="col-span-2 text-9xl justify-self-center  my-10">
              {weatherData.weather[0].main === "Clear" ? (
                <WiDaySunny />
              ) : (
                <WiDayHaze />
              )}
            </p>
            <p className="text-2xl text-center justify-self-center">
              {weatherData.main.humidity}% <br />
              Humidity
            </p>
            <p className="text-2xl text-center justify-self-center">
              {kelvinToCelsius(weatherData.main.feels_like)}% <br /> Feels Like
            </p>
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
