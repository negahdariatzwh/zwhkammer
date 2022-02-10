import { React } from "react";

function PaginationBtn({ setPage, currentPage, pageIndexNumber }) {
  return (
    <li
      key={pageIndexNumber}
      className="page-item"
      onClick={() => setPage(pageIndexNumber)}
    >
      <span
        className={`page-link pointer ${
          currentPage === pageIndexNumber ? "activePagination" : ""
        }`}
      >
        {pageIndexNumber}
      </span>
    </li>
  );
}

export default PaginationBtn;
