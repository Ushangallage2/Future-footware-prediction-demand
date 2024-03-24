
const { db } = require('../db');
const util = require('util');
const fs = require('fs').promises;
const query = util.promisify(db.query).bind(db);
const axios = require("axios");
const { log } = require('console');




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
      await query(sql, [imageNumber,modelImage]);
      return { status: 'Success' };
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };




  const getImageByModelNumber = async (modelNumber) => {
    // const queryString = 'SELECT modelImage FROM modeldetails WHERE modelNumber = ?';
    const queryString = 'SELECT modelImage, size, category, imageUrl FROM modeldetails WHERE modelNumber = ?';

  
    try {
      const result = await query(queryString, [modelNumber]);
      if (result.length > 0) {
        return result[0].modelImage;
      } else {
        throw new Error('Image not found');
      }
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  };


  // 'SELECT modelImage, size, category FROM modeldetails WHERE modelNumber = ?';

  const getModelDetails = async (modelNumber) => {
   
    
    const queryString = 'SELECT  modelNumber ,size, category FROM modeldetails WHERE modelNumber = ?';

  
    try {
      const [result] = await query(queryString, [modelNumber]);
      if (result) {
          return result; // Return the entire row of model details
      } else {
          throw new Error('Model details not found');
      }
  } catch (error) {
      console.log('Error fetching model details:', error);
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


const SalesCount = async (days,shoeModel) => {
  try {
    // Specify the URL where your Flask server is running
    const apiUrl = "http://127.0.0.1:5000/predict";
    
  

    // Make a GET request to the Flask API
    // const response = await axios.get(apiUrl);

    // const response = await axios.get(apiUrl, {
    //   params: {
    //     shoeModel: shoeModel,
    //     days: days,
    //   },
    // });
    console.log(shoeModel,days,"shole modal data")
    const response = await axios.get(`http://127.0.0.1:5000/predict?shoeModel=${shoeModel}&days=${days}`, {
      params: {
        // shoeModel: shoeModel,
        // days: days,
      },
    });

    console.log(JSON.stringify(response?.data.predictedSales),"Predicted data")
   
    // console.log(response.data)

    // Extract the predicted sales from the response
    const predictedSales = response?.data?.predictedSales || [];
    // const predictedSales = "mage nama predict sales";

    // Do something with the predictedSales data
    
    return predictedSales;
  } catch (error) {
    console.log("Error:", error.message);
  }
};





module.exports = {  getImageByModelNumber,updateModelImage ,getAllModels ,  SalesCount, getModelDetails};
