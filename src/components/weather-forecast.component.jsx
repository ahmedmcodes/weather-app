import { useEffect, useState } from "react";
import kelvinToCelsius, { getDayFromTimestamp } from "../functions";

const WeatherForecast = ({ cityName, weatherData, lonLat }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  let apiUrl;
  if (cityName) {
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  } else {
    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lonLat.lat}&lon=${lonLat.lon}&appid=${apiKey}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(apiUrl);
        const data = await request.json();
        setForecast(data.list);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  const filteredForecast = forecast.filter((item) => {
    return item.dt_txt.includes("15:00:00");
  });

  if (forecast === undefined) {
    return <h1>forecast is not defned</h1>;
  }

  if (filteredForecast[0] === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Weather Forecast for {weatherData.name} </h1>
      {forecast[0] && (
        <>
          {filteredForecast.map((item, index) => {
            return (
              <div key={index}>
                {getDayFromTimestamp(item.dt)}:{kelvinToCelsius(item.main.temp)}
                &deg;C
                <p>Weather: {item.weather[0].main}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default WeatherForecast;
