/* eslint-disable react/prop-types */
import React from "react";
import Select from "./Select.jsx";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value) || options.at(0).value;
    setSearchParams(searchParams);
  }

  return <Select options={options} type="white" onChange={handleChange} value={sortBy} />;
};

export default SortBy;
