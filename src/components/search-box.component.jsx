import { useState } from "react";
import cities from "/cities.json";

const SearchBox = ({ state, setState }) => {
  const [getState, setGetState] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleOnChange = (e) => {
    setGetState(e.target.value);
    const filteredresult = cities
      .filter((city) => {
        return city.city_name.includes(e.target.value);
      })
      .slice(0, 5);
    setFilteredCities(filteredresult);
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
    setFilteredCities([]);
  };

  return (
    <div>
      <input
        type="text"
        value={getState}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      ></input>
      <button onClick={handleOnClick}>Search</button>
      <div>
        {filteredCities.map((city) => {
          return (
            <p
              key={city.city_name}
              onClick={() => handleSuggestionOnClick(city)}
            >
              {city.city_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBox;
