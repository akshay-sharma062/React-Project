import React, { useRef } from "react";

function Search(props) {
  const searchInput = useRef();
  return (
    <div className="sm:flex  shadow-black">
      <input
        type="search"
        value={props.searchData}
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
        className="sm:mx-1 sm:ml-19 sm:font-medium sm:text-2xl sm:w-xl border-2 duration-700 hover:bg-amber-50 border-black rounded p-3 hover:shadow-2xl hover:shadow-amber-50 "
      />
      <button
        onClick={props.searchWeather}
        className="sm:p-2 font-bold sm:text-2xl sm:mx-2 border-2 rounded-xl bg-blue-950 text-white border-black cursor-pointer hover:bg-transparent hover:text-blue-950 hover:shadow-2xl hover:shadow-amber-50 duration-700 "
      >
        Search
      </button>
    </div>
  );
}

export default Search;
