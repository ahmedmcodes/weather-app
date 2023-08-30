import { useEffect, useState } from "react";
import moment from "moment/moment";

const WeatherForecast = ({ state }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid={API key}
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
    return item.dt_txt.includes("3:00:00");
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
    const localTime = new Date(timestamp * 1000 - offset);
    // console.log(days[localTime.getDay()]);
  }

  getDayFromTimestamp(1693515600);

  console.log(forecast);

  if (forecast === undefined) {
    return <h1>forecast is not defned</h1>;
  }

  return (
    <div>
      <h1>Weather Forecast for {state}</h1>
      {forecast[0] && (
        <>
          <h1>{forecast[0].dt}</h1>
          {/*
          // <h1>{forecast[2].main.temp}</h1>
          // <h2>{new Date(forecast.list[2].dt * 1000).getDay()}</h2>
          // <h2>{moment.unix(1693472400 * 1000).format("dddd")}</h2>
      */}
        </>
      )}
    </div>
  );
};

export default WeatherForecast;
