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

    fetchData();

    // setTimeout(() => {
    //   fetchData();
    // }, 3000);
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

  console.log(filteredForecast);

  return (
    <div className="col-span-2 rounded-3xl bg-transparent  border hover:border-black drop-shadow-lg">
      <h1 className="text-center my-5 text-3xl mx-2 font-semibold">
        Forecast for {weatherData.name}
      </h1>
      {forecast[0] && (
        <div className="grid grid-cols-3 gap-2 ">
          {filteredForecast.map((item, index) => {
            return (
              <div
                className="text-center justify-self-center rounded-2xl  mx-2 mb-2 border shadow-sm hover:border-black drop-shadow-sm hover:cursor-pointer hover:scale-110 duration-500"
                key={index}
              >
                <p className="mt-2">{getDayFromTimestamp(item.dt)}</p>
                <img
                  className="mx-1"
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="weather"
                />
                <p className="mt-2">
                  {kelvinToCelsius(item.main.temp)}
                  &deg;C{" "}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
