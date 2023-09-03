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
      .slice(0, 5);
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
      <div className="my-5 w-6/12 flex flex-row justify-items-center relative">
        <input
          type="search"
          value={getCityName}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          className="mx-2 rounded-full focus:outline-none h-8 text-center w-screen bg-orange-300 text-sm border border-white focus:border-black focus:bg-orange-200 shadow-orange-400"
        />
        <MdSearch
          onClick={handleOnClick}
          className=" my-2 mr-5 text-md hover:cursor-pointer  shrink-0 absolute right-4"
        />
      </div>
      <div className="text-center">
        {filteredCities.map((city, index) => {
          return (
            <p key={index} onClick={() => handleSuggestionOnClick(city)}>
              {city.city_name}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default SearchBox;
