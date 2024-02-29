const { db } = require('../db');
const util = require('util');
const query = util.promisify(db.query).bind(db);

// // // Service function to handle image upload to the database
// // const UploadImageNow = async (imageData) => {
// //   const queryString = 'INSERT INTO modeldetails (modelImage) VALUES (?)';
// //   const values = [imageData];

// //   try {
// //     const results = await query(queryString, values);
// //     return { success: true, imageID: results.insertId };
// //   } catch (error) {
// //     console.error(error);
// //     return { success: false, error: 'Internal Server Error' };
// //   }
// // };

// // module.exports = {
// //   UploadImageNow,
// // };
// // Service function to handle image upload to the database
// const UploadImageNow = async (imageData) => {
//     console.log("img data is here!!!!!!")
//     console.log(imageData)
//     const queryString = 'INSERT INTO modeldetails (modelImage) VALUES (?)';
//     const values = [imageData];

//     console.log(imageData)

//     try {
//         if (!imageData) {
//             throw new Error('Image data cannot be null');
//         }

//         const results = await query(queryString, values);
//         return { success: true, imageID: results.insertId };
//     } catch (error) {
//         console.log(error);
//         return { success: false, error: error.message || 'Internal Server Error' };
//     }


// };

const UploadImageService = async (modelNumber, files) => {
//   console.log(`Image uploaded for modelNumber ${modelNumber}: ${files.E1500[0].originalFilename}`);
  console.log("file is here");
  console.log('Files:', files);
  const insertQuery = "INSERT INTO modeldetails (modelNumber, modelImage) VALUES (?, ?)";
  const insertParams = [modelNumber, files.originalFilename];


  

  try {
      const result = await executeQuery(insertQuery, insertParams);
      console.log("-------------------------------------")
      console.log(result)
      return { success: true, message: 'Image uploaded successfully', insertedId: result.insertId };
  } catch (error) {
      console.log('Error uploading image:', error);
      return { success: false, message: 'Failed to upload image' };
  }
};


const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
      db.query(query, params, (error, result) => {
          if (error) {
              reject(error);
          } else {
              resolve(result);
          }
      });
  });
};






const getImageURLByModelNumber = async (modelNumber) => {
    const queryString = 'SELECT DISTINCT modelImage FROM modeldetails WHERE modelNumber =?';
    console.log(queryString )
    const values = [modelNumber];
    console.log("image from db is here!")
    console.log(values)

    try {
        const result = await query(queryString, values);

        if (result.length > 0 && result[0].modelImage) {
            return result[0].modelImage;
        } else {
            throw new Error('Image not found for the given modelNumber');
        }
    } catch (error) {
        console.log(error);
        throw new Error('Internal Server Error');
    }
};





const GetAllModelNumbersNow = async () => {
    const queryString = 'SELECT DISTINCT modelNumber FROM modeldetails';
  
    try {
      const modelNumbers = await query(queryString);
      return modelNumbers.map((result) => result.modelNumber);
    } catch (error) {
      console.log('Error fetching model numbers:', error);
      throw new Error('Internal Server Error');
    }
  };






module.exports = {
    getImageURLByModelNumber,
    UploadImageService,
    GetAllModelNumbersNow
}
