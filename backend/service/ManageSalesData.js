const { db } = require('../db');
const util = require('util');
const fs = require('fs');
const csv = require('csv-parser');
const xlsx = require('xlsx');
const query = util.promisify(db.query).bind(db);

const handleCsvFile = async (file) => {
    const results = [];

    await new Promise((resolve, reject) => {
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                fs.unlinkSync(file.path);
                await saveDataToMySQL(results);
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
    return results;
};

const handleXlsxFile = async (file) => {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    fs.unlinkSync(file.path);
    await saveDataToMySQL(data);
    return data;
};

const saveDataToMySQL = async (data) => {
    try {
        for (const row of data) {
            const { Date, SalesValue } = row;
            const queryString = 'INSERT INTO sales_data (date, salesValue) VALUES (?, ?)';
            await query(queryString, [Date, SalesValue]);
        }
    } catch (error) {
        throw error;
    }
};

const getSalesData = async () => {
    try {
        const queryString = 'SELECT * FROM sales_data';
        const data = await query(queryString);
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    handleCsvFile,
    handleXlsxFile,
    getSalesData
};
