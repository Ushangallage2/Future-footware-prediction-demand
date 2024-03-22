const fs = require('fs');

const { handleCsvFile, handleXlsxFile, getSalesData } = require('../service/ManageSalesData');

const UploadFiles = async (req, res) => {
    try {
        const files = req.files;

        const fileData = await Promise.all(
            files.map(async (file) => {
                if (file.mimetype === 'text/csv') {
                    return await handleCsvFile(file);
                } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    return await handleXlsxFile(file);
                } else {
                    fs.unlinkSync(file.path);
                    throw new Error('Invalid file type');
                }
            }));

        res.status(200).json(fileData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const GetSalesData = async (_, res) => {
    try {
        const data = await getSalesData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { UploadFiles,GetSalesData};