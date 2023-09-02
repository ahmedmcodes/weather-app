import { useState } from "react";
import cities_main from "/cities_main.json";

const SearchBox = ({ setCityName }) => {
  const [getCityName, setGetCityName] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleOnChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setGetCityName(searchValue);
    const filteredResult = cities_main
      .filter((city) => {
        return (
          searchValue && city.city_name.toLowerCase().includes(searchValue)
        );
      })
      .slice(0, 5);
    setFilteredCities(filteredResult);
  };

  const handleOnClick = () => {
    setCityName(getCityName);
    setGetCityName("");
  };

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter" && getCityName.length > 2) {
      setCityName(getCityName);
      setGetCityName("");
    }
  };

  const handleSuggestionOnClick = (city) => {
    setCityName(city.city_name);
    setFilteredCities([]);
    setGetCityName("");
  };

  return (
    <div>
      <input
        type="search"
        value={getCityName}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      ></input>
      <button onClick={handleOnClick}>Search</button>
      <div>
        {filteredCities.map((city, index) => {
          return (
            <p key={index} onClick={() => handleSuggestionOnClick(city)}>
              {city.city_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBox;
