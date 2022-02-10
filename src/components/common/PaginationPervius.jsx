import React from "react";

function PaginationPervius({ currentPage, setPage }) {
  return (
    <li
      className="page-item"
      onClick={() => (currentPage > 1 ? setPage(currentPage - 1) : setPage(1))}
    >
      <span className="page-link pointer" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </span>
    </li>
  );
}

export default PaginationPervius;
