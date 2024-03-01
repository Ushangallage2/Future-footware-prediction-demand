
const { db } = require('../db');
const util = require('util');
const fs = require('fs').promises;
const query = util.promisify(db.query).bind(db);





// const updateModelImage = async (modelImage) => {
//   const sql =  "INSERT INTO modeldetails (modelImage) VALUES (?)";
//   try {
//     await query(sql, [modelImage]);
//     return { status: 'Success' };
//   } catch (error) {
//     console.error('Error updating model image:', error);
//     throw new Error('Internal Server Error');
//   }
// };
const updateModelImage = async (imageNumber, modelImage) => {
    const sql = "INSERT INTO modeldetails (modelNumber, modelImage) VALUES (?, ?)";
    try {
      await query(sql, [ imageNumber,modelImage]);
      return { status: 'Success' };
    } catch (error) {
      console.log('Error updating model image:', error);
      throw new Error('Internal Server Error');
    }
  };




  const getImageByModelNumber = async (modelNumber) => {
    const queryString = 'SELECT modelImage FROM modeldetails WHERE modelNumber = ?';
  
    try {
      const result = await query(queryString, [modelNumber]);
      if (result.length > 0) {
        return result[0].modelImage;
      } else {
        throw new Error('Image not found');
      }
    } catch (error) {
      console.log('Error fetching image by model number:', error);
      throw new Error('Internal Server Error');
    }
  };












const getAllModels = async () => {
  const queryString = 'SELECT DISTINCT modelNumber FROM modeldetails';

  try {
    const modelNumbers = await query(queryString);
    return modelNumbers.map((result) => result.modelNumber);
  } catch (error) {
    console.error('Error fetching model numbers:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {  getImageByModelNumber,updateModelImage ,getAllModels };
