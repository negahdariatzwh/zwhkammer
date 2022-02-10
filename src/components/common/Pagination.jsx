import { React } from "react";
import PaginationPervius from "./PaginationPervius";
import PaginationNext from "./PaginationNext";
import PaginationBtn from "./PaginationBtn";
function Pagination({ setPage, currentPage, count }) {
  let countPages = parseInt(Math.ceil(count / 20));
  let pages_arr = new Array(countPages === 0 ? 1 : countPages);
  pages_arr.fill(0);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <PaginationPervius currentPage={currentPage} setPage={setPage} />
        {pages_arr.map((item, index) => (
          <PaginationBtn
            key={index}
            setPage={setPage}
            currentPage={currentPage}
            pageIndexNumber={index + 1}
          />
        ))}
        <PaginationNext
          currentPage={currentPage}
          setPage={setPage}
          count={countPages}
        />
      </ul>
    </nav>
  );
}

export default Pagination;
