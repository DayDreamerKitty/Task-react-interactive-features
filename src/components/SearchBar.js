import React from "react";
// Styling

const SearchBar = ({ setQuery }) => {
  return (
    <input
      type="search"
      className="searchBar"
      placeholder="Search for a cookie name"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
