import { useEffect, useState } from "react";

const LocationFetcher = () => {
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLon(position.coords.longitude);
        setLat(position.coords.latitude);
      },
      (error) => {
        console.log(error);
      }
    );
  });

  console.log(lon);
  console.log(lat);

  return <h1>Hello Geolocation</h1>;
};

export default LocationFetcher;
