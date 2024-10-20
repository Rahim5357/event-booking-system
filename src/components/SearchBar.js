import React from 'react';

const SearchBar = ({ setSearch, search }) => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
