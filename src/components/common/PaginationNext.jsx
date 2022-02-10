import React from "react";

function PaginationNext({ setPage, currentPage, count }) {
  const handleNext = () => {
    if (currentPage < count) {
      console.log("nextpage", currentPage + 1);
      setPage(currentPage + 1);
    } else {
      console.log("nextpage", currentPage);
    }
  };
  return (
    <li
      key={currentPage + 1}
      className="page-item"
      onClick={() => handleNext()}
    >
      <span className="page-link pointer" aria-label="next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">next</span>
      </span>
    </li>
  );
}

export default PaginationNext;
