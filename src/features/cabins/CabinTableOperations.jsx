import React from "react";
import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low)" },
          { value: "regularPrice-desc", label: "Sort by price (high)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high)" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
