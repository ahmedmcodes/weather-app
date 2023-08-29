import { useEffect, useState } from "react";

const WeatherForecast = ({ state }) => {
  const [forecast, setForecast] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${apiKey}`
        );
        const data = await request.json();
        setForecast(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(forecast);

  if (forecast.cod === undefined) {
    return <h1>Hello world2</h1>;
  }

  return <div>{forecast && <h1>{forecast.list[9].main.temp}</h1>}</div>;
};

export default WeatherForecast;
