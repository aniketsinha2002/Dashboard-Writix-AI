import React, { useState } from "react";

const SearchBar = ({ onSearch, isToggled }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      className={`rounded-md border p-2 w-1/2 ${
        isToggled
          ? "bg-[#2C2C2C] border-gray-700 text-white"
          : "bg-white text-black"
      }`}
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
