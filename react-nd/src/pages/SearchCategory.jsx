// Import necessary hooks
import React from "react";
import { useParams } from "react-router-dom";

export const SearchCategory = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Search Results for category: {category}</h1>
    </div>
  );
};
