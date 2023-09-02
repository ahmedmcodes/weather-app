import { useState } from "react";
import cities_main from "/cities_main.json";

const SearchBox = ({ state, setState }) => {
  const [getState, setGetState] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleOnChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setGetState(searchValue);
    let filteredResult = cities_main
      .filter((city) => {
        return city.city_name.toLowerCase().includes(searchValue);
      })
      .slice(0, 5);
    searchValue === "" ? (filteredResult = []) : null;
    setFilteredCities(filteredResult);
  };

  const handleOnClick = () => {
    setState(getState);
    setGetState("");
  };

  const handleOnKeyDown = (e) => {
    if (e.code === "Enter" && getState.length > 2) {
      setState(getState);
      setGetState("");
    }
  };

  const handleSuggestionOnClick = (city) => {
    console.log(city);
    setState(city.city_name);
    setFilteredCities([]);
    setGetState("");
  };

  return (
    <div>
      <input
        type="search"
        value={getState}
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
