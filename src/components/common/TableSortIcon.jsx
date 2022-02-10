import React from "react";

function TableSortIcon({ item, sortHandle }) {
  return (
    <i
      className="fas fa-sort pointer blue leftspace"
      onClick={() => sortHandle({ item })}
    ></i>
  );
}

export default TableSortIcon;
