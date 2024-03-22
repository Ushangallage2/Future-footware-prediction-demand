const { db } = require('../db');
const util = require('util');
const fs = require('fs').promises;
const query = util.promisify(db.query).bind(db);






const saveReport = async (report) => {
    try {


        const { modelNumber, size, salesData, category, predictedSalesDemand } = report;


        const result = await db.query(
            `INSERT INTO reports (modelNumber, size, salesData, category, predictedSalesDemand) VALUES (?, ?, ?, ?, ?)`,
            [
                modelNumber,
                size, 
                JSON.stringify(salesData), // Convert salesData array to JSON string for storage
                category,
                predictedSalesDemand
            ]
        );
        console.log(result[0] ," result is here!!!")
        return result[0];
       
    } catch (error) {
        console.error('Error saving report to database:', error);
        throw error; // Rethrow the error so the caller can handle it
    }
};

module.exports = {
    saveReport
};



















