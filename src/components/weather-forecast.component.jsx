import { useEffect, useState } from "react";

const WeatherForecast = ({ state, kelvinToCelsius }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${apiKey}`
        );
        const data = await request.json();
        setForecast(data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredForecast = forecast.filter((item) => {
    return item.dt_txt.includes("15:00:00");
  });

  console.log(filteredForecast);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getDayFromTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const offset = date.getTimezoneOffset() * 60 * 1000;
    const localTime = new Date(timestamp * 1000 + offset);
    return days[localTime.getDay()];
  }

  if (forecast === undefined) {
    return <h1>forecast is not defned</h1>;
  }

  if (filteredForecast[0] === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Weather Forecast for {state}</h1>
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
