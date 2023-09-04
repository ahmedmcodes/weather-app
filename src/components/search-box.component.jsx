import { useState } from "react";
import cities_main from "/cities_main.json";
import { MdSearch } from "react-icons/md";

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
      .slice(0, 10);
    setFilteredCities(filteredResult);
  };

  const handleOnClick = () => {
    setCityName(getCityName);
    setGetCityName("");
    setFilteredCities([]);
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
    <>
      <div className="mt-5 w-6/12 flex flex-row justify-items-center relative">
        <input
          type="search"
          value={getCityName}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          className="mx-2 rounded-full focus:outline-none h-8 text-center w-screen bg-transparent text-sm border-2 border-white focus:border-black focus:backdrop-sepia-10 shadow-orange-400 hover:cursor-pointer focus:cursor-text"
        />
        <MdSearch
          onClick={handleOnClick}
          className=" my-2 mr-5 text-lg hover:cursor-pointer absolute right-4 font-extrabold"
        />
      </div>
      <div className="text-center bg-white w-6/12 z-50">
      {filteredCities.map((city, index) => {
          return (
            <li key={index} onClick={() => handleSuggestionOnClick(city)}>
              {city.city_name}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default SearchBox;
