import "./ReportTable.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";
import jsPDF from "jspdf";

function ReportTable() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Model ID",
        accessor: "model_id",
      },
      {
        Header: "Predicted time range",
        accessor: "predicted_time_range",
      },
      {
        Header: "No of demand forecasted",
        accessor: "no_of_shoes_forecasted",
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
    generatePDF(row.original);
  };

  // Function to generate PDF
  const generatePDF = (rowData) => {
    const doc = new jsPDF();
    const keys = Object.keys(rowData);
    const values = Object.values(rowData);
    const tableData = keys.map((key, index) => [key, values[index]]);

    doc.autoTable({
      head: [["decription", "results"]],
      body: tableData,
    });

    doc.save("report.pdf");
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
