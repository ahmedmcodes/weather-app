import { useState } from "react";

const SearchBox = ({ setState }) => {
  const [getState, setGetState] = useState("");

  const handleOnChange = (e) => {
    setGetState(e.target.value);
  };

  const handleOnClick = () => {
    setState(getState);
    setGetState("");
  };

  return (
    <div>
      <input type="text" value={getState} onChange={handleOnChange}></input>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default SearchBox;
