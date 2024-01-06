import React, { useState } from 'react';

export const SearchBar = ({ onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onClick(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-4 bg-gray-200">
      <img src="/logo.png" alt="Logo" className="h-6 mr-2" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-2/3 p-2 border border-gray-300 rounded mr-2"
        placeholder="Search..."
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
        Search
      </button>
    </form>
  );
};

