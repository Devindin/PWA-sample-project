import { useState } from "react";
import Delete from "../assets/Delete.svg";
import Edit from "../assets/Edit.svg";
import MoreView from "../assets/MoreView.svg";
import View from "../assets/View.svg";
// import Sort_button from "./Sort_button";
// import Download_button from "./Download_button";
// import Search_bar from "./Search_bar";
import Pagination from "./Pagination";
import Restore from "../assets/ReStore.svg";
import Approve from "../assets/Approve.svg";
import Reject from "../assets/Reject.svg";
// import renderStatus from "../Utils/renderStatus";

function Table({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  onMoreview,
  onRestore,
  onApprove,
  currentPage,
  setCurrentPage,
  totalPages,
  canEdit = true,
  canDelete = true,
  canView = true,
  canMoreView,
  canRestore,
  canApprove,
  canReject,
  setSearchTerm = () => {},
  searchTerm = "",
  placeholder,
  totalCount,
  showSearchBar = true,
  showSortButton = true,
  showDownloadButton = true,
  customActions = null,
}) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((_, i) => i));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isAllSelected = selectedRows.length === data.length && data.length > 0;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="sm:flex flex-col items-center justify-center w-full mt-4 hidden ">
      <div className="w-full    flex flex-col">
        <div className="flex flex-row justify-between gap-2">
          {/* Left Column: Search bar */}
          {/* {showSearchBar && (
            <Search_bar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setCurrentPage={setCurrentPage}
              placeholder={placeholder}
            />
          )} */}

          {/* Right Column: Buttons */}
          {/* <div className="flex flex-row gap-1">
            {showSortButton && <Sort_button />}
            {showDownloadButton && <Download_button />}
            {customActions}
          </div> */}
        </div>

        {/* Table - responsive wrapper */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          <table className="w-full table-auto border-[2px] border-[#0000001C]">
            <thead>
              <tr className=" text-left  font-semibold border-b bg-table_header_bg text-[10px] md:text-[14px] sticky top-0 z-10 text-white_text font-inter">
                {/* Checkbox header */}
                <th className="px-2 py-2">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    className="appearance-none w-3 h-3 border border-white  checked:bg-white checked:border-transparent focus:outline-none rounded-[3px]"
                  />
                </th>

                {columns.map((col, j) => (
                  <th key={j} className="px-2 py-2 capitalize">
                    {col}
                  </th>
                ))}

                <th className="px-2 py-1 text-right pr-10">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#D9D5EC] hover:bg-gray-50  text-[10px] md:text-[14px] font-inter text-[#5E5E5E] dark:text-white"
                  >
                    {/* Row checkbox */}
                    <td className="px-2 py-2">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(i)}
                        onChange={() => handleSelectRow(i)}
                        className="appearance-none w-3 h-3 border border-[#2D5697] rounded-[3px] checked:bg-[#2D5697] checked:border-transparent focus:outline-none"
                      />
                    </td>
                    {columns.map((col, j) => (
                      <td key={j} className="px-2 py-2">
                        {row[col]}
                      </td>
                    ))}

                    <td className="px-2 py-2 flex gap-1 items-center justify-end mr-4">
                      {canView && (
                        <button
                          onClick={() => onView(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={View}
                            alt="View"
                            className="w-full h-auto"
                          />
                        </button>
                      )}

                      {canEdit && onEdit && (
                        <button
                          onClick={() => onEdit(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={Edit}
                            alt="Edit"
                            className="w-full h-auto"
                          />
                        </button>
                      )}

                      {canDelete && (
                        <button
                          onClick={() => onDelete(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={Delete}
                            alt="Delete"
                            className="w-full h-auto"
                          />
                        </button>
                      )}
                      {canRestore && (
                        <button
                          onClick={() => onRestore(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={Restore}
                            alt="Restore"
                            className="w-full h-auto ml-2"
                          />
                        </button>
                      )}
                      {canApprove && (
                        <button
                          onClick={() => onApprove(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={Approve}
                            alt="Approve"
                            className="w-full h-auto ml-2"
                          />
                        </button>
                      )}
                      {canReject && (
                        <button
                          onClick={() => onReject(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={Reject}
                            alt="Reject"
                            className="w-full h-auto ml-2"
                          />
                        </button>
                      )}
                      {canMoreView && (
                        <button
                          onClick={() => onMoreview(row)}
                          className=" w-[20px]"
                        >
                          <img
                            src={MoreView}
                            alt="More view"
                            className="w-full h-auto ml-2"
                          />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="text-center px-4 py-4 text-gray-500"
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          pageSize={6}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Table;
