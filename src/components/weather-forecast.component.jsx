// import { useEffect } from "react";

// const WeatherForecast = () => {
//   // const [forecast, setForecast] = useState({})
//   const apiKey = import.meta.env.VITE_API_KEY;
//   console.log(apiKey);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const request = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`
//         );
//         const data = await request.json();
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);
//   return <h1>This is h1 from forecast component</h1>;
// };

// export default WeatherForecast;
