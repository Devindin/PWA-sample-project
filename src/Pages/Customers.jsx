import React, { useState } from "react";
import PageLayout from "../Layout/Pagelayout";
import Table from "../Components/Table";

function Customers() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const columns = ["Leave ID", "Leave Type", "Leave Days", "Employee Type"];
  const fields = columns.map((col) => ({ key: col, label: col }));

  const leave_types = [
    { "Leave ID": "Lev001", "Leave Type": "Casual leaves", "Leave Days": 14, "Employee Type": "Permanent" },
    { "Leave ID": "Lev002", "Leave Type": "Sick leaves", "Leave Days": 10, "Employee Type": "Contract" },
    { "Leave ID": "Lev003", "Leave Type": "Annual leaves", "Leave Days": 21, "Employee Type": "Permanent" },
    { "Leave ID": "Lev004", "Leave Type": "Maternity leaves", "Leave Days": 90, "Employee Type": "Permanent" },
    { "Leave ID": "Lev005", "Leave Type": "Casual leaves", "Leave Days": 7, "Employee Type": "Intern" },
    { "Leave ID": "Lev006", "Leave Type": "Sick leaves", "Leave Days": 5, "Employee Type": "Permanent" },
    { "Leave ID": "Lev007", "Leave Type": "Annual leaves", "Leave Days": 30, "Employee Type": "Contract" },
    { "Leave ID": "Lev008", "Leave Type": "Casual leaves", "Leave Days": 12, "Employee Type": "Permanent" },
  ];

  const totalCount = leave_types.length;
  const totalPages = Math.ceil(totalCount / pageSize);

  const paginatedData = leave_types.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Actions
  const handleView = (rowData) => console.log("View clicked for:", rowData);
  const handleEdit = (rowData) => console.log("Edit clicked for:", rowData);
  const handleDelete = (rowData) => console.log("Delete clicked for:", rowData);

  // Pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <PageLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Customers</h1>

        <Table
          columns={columns}
          data={paginatedData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showSearchBar={true}
          showSortButton={true}
          showDownloadButton={true}
          placeholder={"Search by leave type or ID."}
          canDelete={true}
        />
      </div>
    </PageLayout>
  );
}

export default Customers;
