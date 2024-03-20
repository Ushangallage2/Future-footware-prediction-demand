const db = require("../db");
const PDFDocument = require("pdfkit");
const fs = require("fs");

function viewReports(req, res) {
  const reports = db.getReports();

  // Create a new PDF document
  const doc = new PDFDocument();

  // Pipe the PDF document to a writable stream
  const stream = fs.createWriteStream("reports.pdf");
  doc.pipe(stream);

  // Add content to the PDF document
  doc.fontSize(20).text("Reports", { align: "center" }).moveDown();
  reports.forEach((report) => {
    doc.fontSize(14).text(`Title: ${report.title}`).moveDown();
    doc.fontSize(12).text(`Content: ${report.content}`).moveDown();
  });

  // End the PDF document
  doc.end();

  // Respond with a success message
  res.send("PDF generated successfully");
}

function getModelNumber(req, res) {
  const { modelNumber } = req.body;
  const modelData = db.getModelData(modelNumber);
  res.json(modelData);
}

module.exports = {
  viewReports,
  getModelNumber,
};
