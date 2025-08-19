import { GrPrevious, GrNext } from "react-icons/gr";

function Pagination({ currentPage, totalPages, totalCount, pageSize, onPageChange }) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="flex justify-end items-center w-full mt-4 pr-2 text-[10px] sm:text-[14px] gap-4 font-roboto text-[#6E6E71]">
      <span>{startItem} – {endItem} of {totalCount}</span>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 disabled:opacity-50"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="p-1 disabled:opacity-50"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
