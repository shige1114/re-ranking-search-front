import React, { useState } from 'react';

export const SearchBar = ({ defaultValue,onClick }) => {
  
  return (
    <form onSubmit={onClick} className="flex items-center p-4 bg-gray-200">
      <img src="./favicon.ico" alt="Logo" className="h-6 mr-2" />
      <input
        type="text"
        name="query"
        defaultValue={defaultValue || ""}
        className="w-2/3 p-2 border border-gray-300 rounded mr-2"
        placeholder="Search..."
      />
      <input type="submit" value={"検索"} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"/>
    </form>
  );
};

export const SearchBarCenter = ({ defaultValue, onClick }) => {
  return (
    <form onSubmit={onClick} className="flex items-center p-4 bg-white w-full text-center">
      <img src="./favicon.ico" alt="Logo" className="h-6 mr-2" />
      <input
        type="text"
        name="query"
        defaultValue={defaultValue || ""}
        className="w-2/3 p-2 border border-gray-300 rounded mr-2"
        placeholder="Search..."
      />
      <input type="submit" value={"検索"} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer" />
    </form>
  );
};
