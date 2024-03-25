
// import React, { useEffect, useState } from 'react';
// import { Paper } from "@material-ui/core";
// import MaterialTable from "material-table";
// import axios from 'axios';

// const Table = (props) => {
//     const [tblData, setTblData] = useState([]);
//     const [fadeIn, setFadeIn] = useState(false);

//     useEffect(() => {
//         const fetchReports = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/report/getReport');
//                 setTblData(response.data);
//                 setFadeIn(true); // Trigger fade-in effect
//             } catch (error) {
//                 console.error('Error fetching reports:', error);
//             }
//         };

//         fetchReports();
//     }, []);

//     return (
//         <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
//             <div className="container-fluid calculated-bodywidth" style={{ marginTop: '7%', marginLeft: '8%', width: '80%' }} id="bla">
//                 <div className="row gutters mt-3">
//                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
//                         <div className="card h-100" id="contentcard">
//                             <div className="card-body">
//                                 <h5>Reports</h5>
//                                 <MaterialTable
//                                     components={{
//                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px', backgroundColor: '#14498f', color: 'white' }} />,
//                                     }}
//                                     options={{
//                                         actionsColumnIndex: -1,
//                                         pageSize: 2, // Display only 2 rows per page
//                                         padding: 'dense' // Use dense padding for smaller size
//                                     }}
//                                     title="Previous Events"
//                                     columns={props.col}
//                                     data={tblData}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Table;
// // // import React, { useEffect, useState } from 'react';
// // // import { Paper, Button } from "@material-ui/core";
// // // import MaterialTable from "material-table";
// // // import axios from 'axios';
// // // import { saveAs } from 'file-saver';
// // // import { PDFDownloadLink } from '@react-pdf/renderer';
// // // import PdfDocument from './PdfDocument'; // Import your PDF document component

// // // const Table = (props) => {
// // //     const [tblData, setTblData] = useState([]);
// // //     const [fadeIn, setFadeIn] = useState(false);

// // //     useEffect(() => {
// // //         const fetchReports = async () => {
// // //             try {
// // //                 const response = await axios.get('http://localhost:8080/report/getReport');
// // //                 setTblData(response.data);
// // //                 setFadeIn(true); // Trigger fade-in effect
// // //             } catch (error) {
// // //                 console.error('Error fetching reports:', error);
// // //             }
// // //         };

// // //         fetchReports();
// // //     }, []);

// // //     const handleDownloadPDF = async () => {
// // //         try {
// // //             const pdfBlob = await PdfDocument(tblData); // Call your PDF document generator function
// // //             saveAs(pdfBlob, 'reports.pdf'); // Save the PDF blob as a file
// // //         } catch (error) {
// // //             console.error('Error generating PDF:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
// // //             <div className="container-fluid calculated-bodywidth" style={{ marginTop: '7%', marginLeft: '8%', width: '80%' }} id="bla">
// // //                 <div className="row gutters mt-3">
// // //                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
// // //                         <div className="card h-100" id="contentcard">
// // //                             <div className="card-body">
// // //                                 <h5>Reports</h5>
// // //                                 <div style={{ marginBottom: '10px' }}>
// // //                                     <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
// // //                                         Download as PDF
// // //                                     </Button>
// // //                                 </div>
// // //                                 <MaterialTable
// // //                                     components={{
// // //                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px', backgroundColor: '#14498f', color: 'white' }} />,
// // //                                     }}
// // //                                     options={{
// // //                                         actionsColumnIndex: -1,
// // //                                         pageSize: 2, // Display only 2 rows per page
// // //                                         padding: 'dense' // Use dense padding for smaller size
// // //                                     }}
// // //                                     title="Previous Events"
// // //                                     columns={props.col}
// // //                                     data={tblData}
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Table;






import React, { useEffect, useState } from 'react';
import { Paper, Button } from "@material-ui/core";
import MaterialTable from "material-table";
import axios from 'axios';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../manageUser/manageUsers.css' ;

const Table = (props) => {
    const [tblData, setTblData] = useState([]);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:8080/report/getReport');
                setTblData(response.data);
                setFadeIn(true); // Trigger fade-in effect
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);


    // const handleDownloadPDF = () => {
    //     const doc = new jsPDF();
    //     doc.text("PDF Content", 10, 10); // Example content, replace with your data
    //     doc.save("data.pdf");
    //   };
    const handleDownloadPDF = async () => {
        try {
            // Fetch data from API
            const response = await axios.get('http://localhost:8080/report/getReport');
            const data = response.data;

            // Generate PDF content dynamically based on fetched data
            let content = '\nmodelNumber\tsize\tsalesData\tcategory\tpredictedSalesDemand\n'; // Header row
            data.forEach(row => {
                content += `${row.modelNumber}\t${row.size}\t${row.salesData}\t${row.category}\t${row.predictedSalesDemand}\n`; // Data rows
            });

            // Create PDF document and save
            const doc = new jsPDF();
            doc.text(content, 1, 1);
            doc.save("data.pdf");
        } catch (error) {
            console.error('Error fetching or generating PDF:', error);
        }
    };



//    const handleDownloadPDF  = () => {
//         const input = document.getElementById('table-to-export');
    
//         html2canvas(input)
//           .then((canvas) => {
//             const pdf = new jsPDF('p', 'mm', 'a4');
//             pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
//             pdf.save('table.pdf');
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };
    
    
    
    

    return (
        <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
            <div className="container-fluid calculated-bodywidth" style={{ marginTop: '8%', marginLeft: '3%', width: '100%' }} id="bla">
                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard" style={{ height:'80vh'}}>
                            <div className="card-body" style={{ height:'80vh'}}>
                                <h5>Reports</h5>
                                <div style={{ marginBottom: '10px' }}>
                                    <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
                                        Download as PDF
                                    </Button>
                                </div>
                                <MaterialTable
                                    id="table-to-export" // Assign an ID to the table for reference
                                    components={{
                                        Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px', backgroundColor: '#14498f', color: 'white' }} />,
                                    }}
                                    options={{
                                        actionsColumnIndex: -1,
                                        pageSize: 2, // Display only 2 rows per page
                                        padding: 'dense' // Use dense padding for smaller size
                                    }}
                                    title="Previous Events"
                                    columns={props.col}
                                    data={tblData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;




    // const handleDownloadPDF = async () => {
    //     try {
    //         const tableRef = document.getElementById('table-to-export');
    //         console.log('Table Ref:', tableRef); // Log the tableRef variable to check if it's selecting the correct element
    
    //         const canvas = await html2canvas(tableRef);
    //         console.log('Canvas:', canvas); // Log the canvas variable to check its content
    
    //         const pdf = new jsPDF('p', 'mm', 'a4');
    //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
    //         pdf.save('reports.pdf');
    //     } catch (error) {
    //         console.error('Error generating PDF:', error);
    //     }
    // };
    // const handleDownloadPDF = async () => {
    //     try {
    //         // Delay execution by 1 second to ensure table is fully rendered
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    
    //         const tableRef = document.getElementById('table-to-export');
    //         console.log('Table Ref:', tableRef);
    
    //         if (tableRef) {
    //             const canvas = await html2canvas(tableRef);
    //             console.log('Canvas:', canvas);
    
    //             const pdf = new jsPDF('p', 'mm', 'a4');
    //             pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
    //             pdf.save('reports.pdf');
    //         } else {
    //             console.error('Table element not found.');
    //         }
    //     } catch (error) {
    //         console.error('Error generating PDF:', error);
    //     }
    // };











// import React, { useEffect, useState, useRef } from 'react';
// import { Paper, Button } from "@material-ui/core";
// import MaterialTable from "material-table";
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const Table = (props) => {
//     const [tblData, setTblData] = useState([]);
//     const [fadeIn, setFadeIn] = useState(false);
//     const tableRef = useRef(null);

//     useEffect(() => {
//         const fetchReports = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/report/getReport');
//                 setTblData(response.data);
//                 setFadeIn(true);
//             } catch (error) {
//                 console.error('Error fetching reports:', error);
//             }
//         };

//         fetchReports();
//     }, []);

//     // const handleDownloadPDF = async () => {
//     //     try {
//     //         if (!tableRef.current) {
//     //             console.error('Table element not found or not attached to the document.');
//     //             return;
//     //         }

//     //         const canvas = await html2canvas(tableRef.current);
//     //         const pdf = new jsPDF('p', 'mm', 'a4');
//     //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
//     //         pdf.save('reports.pdf');
//     //     } catch (error) {
//     //         console.error('Error generating PDF:', error);
//     //     }
//     // };

  

        // const handleDownloadPDF = () => {
        //     const doc = new jsPDF()
        //     doc.text("Prediction Report", 20, 10)
        //     doc.autoTable({
        //       theme: "grid",
        //       columns: columns.map(col => ({ ...col, dataKey: col.field })),
        //       body: studentData
        //     })
        //     doc.save('table.pdf')
        //   }
       



//     return (
//         <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
//             <div className="container-fluid calculated-bodywidth" style={{ marginTop: '7%', marginLeft: '8%', width: '80%' }} id="bla">
//                 <div className="row gutters mt-3">
//                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
//                         <div className="card h-100" id="contentcard">
//                             <div className="card-body">
//                                 <h5>Reports</h5>
//                                 <div style={{ marginBottom: '10px' }}>
//                                     <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
//                                         Download as PDF
//                                     </Button>
//                                 </div>
//                                 <MaterialTable
//                                     id="table-to-export"
//                                     ref={tableRef}
//                                     components={{
//                                         Container: (props) => <Paper {...props} elevation={0} style={{ borderRadius: '10px', backgroundColor: '#14498f', color: 'white' }} />,
//                                     }}
//                                     options={{
//                                         actionsColumnIndex: -1,
//                                         pageSize: 2,
//                                         padding: 'dense'
//                                     }}
//                                     title="Previous Events"
//                                     columns={props.col}
//                                     data={tblData}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Table;


