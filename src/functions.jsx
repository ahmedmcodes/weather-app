const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.1).toFixed(1);
};

export function getDayFromTimestamp(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(timestamp * 1000);
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const localTime = new Date(timestamp * 1000 + offset);
  return days[localTime.getDay()];
}

export default kelvinToCelsius;
