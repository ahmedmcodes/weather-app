import { useRef, useState } from "react";

const SearchBox = ({ setState }) => {
  const [getState, setGetState] = useState("");
  const inputRef = useRef();

  const handleOnChange = (e) => {
    setGetState(e.target.value);
  };

  const handleOnClick = () => {
    setState(getState);
    setGetState("");
    // inputRef.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        value={getState}
        onChange={handleOnChange}
        // ref={inputRef}
      ></input>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default SearchBox;
