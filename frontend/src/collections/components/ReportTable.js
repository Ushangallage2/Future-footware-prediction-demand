import "./ReportTable.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function ReportTable() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: " Model ID",
        accessor: "model id",
      },
      {
        Header: "Predicted time range",
        accessor: "predicted time range",
      },
      {
        Header: "No of demand forcasted",
        accessor: "no of shoes forcasted",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // Function to handle row click
  const handleRowClick = (row) => {
    // You can implement your logic here, such as navigating to a detail page
    console.log("Row clicked:", row.original);
  };

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => handleRowClick(row)}
                  style={{ cursor: "pointer" }} // Change cursor to pointer on hover
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportTable;
