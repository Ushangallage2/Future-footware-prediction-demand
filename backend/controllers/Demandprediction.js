
// const multer = require('multer');
// const upload = multer({ dest: './uploads' }); // Specify the destination folder for uploaded files

// const { UploadImageNow } = require('../service/Demandprediction'); // Assuming you have a service for image uploads

// const UploadImage = async (req, res) => {
//   try {
//     const imageBuffer = req.file.buffer; // Access the uploaded image data

//     // Call the service function to handle the image upload
//     const uploadSuccess = await UploadImageNow(imageBuffer);

//     // Respond with the result of the upload
//     return res.json(uploadSuccess);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


// module.exports = {
//   UploadImage
// };


// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const { UploadImageNow } = require('../service/Demandprediction');

// const UploadImage = async (req, res) => {
//   try {
//     const imageBuffer = req.file.buffer;
//     const uploadSuccess = await UploadImageNow(imageBuffer);
//     console.log(imageBuffer)

//     if (uploadSuccess.success) {
//       return res.json(uploadSuccess);
//     } else {
//       console.error('Image upload failed:', uploadSuccess.error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } catch (error) {
//     console.error('Exception during image upload:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// const UploadImage = (req, res, next) => {
//     try {
// Assuming 'img' is the key for the uploaded image in your form data
//   const Image = req.file.buffer; // Check if the image data is available
//   console.log("img data is here!", Image); // Log the image data

// Call the service layer function for image upload
//       UploadImageNow(Image);

//       console.log("data could be here"); // Log this message

//       res.status(200).json({
//         message: "Image upload successful",
//         data: Image,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         message: "Image upload failed",
//         error: error.message,
//       });
//     }
//   };


// module.exports = {
//   UploadImage
// };


// DemandpredictionController.js
// const { UploadImageNow } = require('../service/Demandprediction');

// const UploadImage = async (req, res, next) => {
//     try {
//         const imageBuffer = req.file.buffer;

//         if (imageBuffer) {
//             console.log("Image data is here!", imageBuffer);

//             const uploadSuccess = await UploadImageNow(imageBuffer);

//             console.log("Data could be here!");

//             if (uploadSuccess.success) {
//                 return res.status(200).json({
//                     message: "Image upload successful",
//                     data: imageBuffer,
//                 });
//             } else {
//                 console.log('Image upload failed:', uploadSuccess.error);
//                 return res.status(500).json({
//                     message: 'Image upload failed',
//                     error: uploadSuccess.error,
//                 });
//             }
//         } else {
//             console.log('Image data is null or undefined');
//             return res.status(400).json({
//                 message: 'Image upload failed',
//                 error: 'Image data is null or undefined',
//             });
//         }
//     } catch (error) {
//         console.log('Exception during image upload:', error);
//         return res.status(500).json({
//             message: 'Image upload failed',
//             error: error.message,
//         });
//     }
// };

// module.exports = {
//     UploadImage,
// };




const formidable = require('formidable');
const { UploadImageService } = require('../service/Demandprediction');
const { getImageURLByModelNumber } = require('../service/Demandprediction');


const {GetAllModelNumbersNow } = require('../service/Demandprediction');

  


const getImageByModelNumber = async (req, res, next) => {
    try {
        const { modelNumber } = req.params;
        const imageURL = await getImageURLByModelNumber(modelNumber);
        const imageDataString = imageURL.toString('base64');
         console.log(imageDataString);

        return res.status(200).json({
            imageURL,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};




// const GetAllModels = async (req, res) => {
//     try {
//         const { modelNumber } = req.params;
//         const imageURL = await GetAllModelsNow (modelNumber);
//         const imageDataString = imageURL.toString('base64');
//          console.log(imageDataString);

//         return res.status(200).json({
//             imageURL,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             error: 'Internal Server Error',
//         });
//     }
// };




const GetAllModels = async (req, res) => {
    try {
      const modelNumbers = await GetAllModelNumbersNow();
      res.status(200).json({ modelNumbers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };





  const UploadImage = async (req, res, next) => {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, files,fields ) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        

        const { modelNumber } =  req.params; // Extract modelNumber correctly
        console.log("model num could be here!", modelNumber);
        // console.log(fields);
        // console.log(files);

        try {
            // Your existing logic to check if the modelNumber exists
            // If not, you may want to handle it accordingly

            const result = await UploadImageService(modelNumber, fields);
            
            if (result.success) {
                return res.status(200).json({
                    message: 'Image uploaded successfully',
                });
            } else {
            
                return res.status(500).json({
                    error: 'Failed to upload image',
                });
            }
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                error: 'Internal Server Error',
                
            });
        }
    });
};










module.exports = {
    getImageByModelNumber,
    GetAllModels,
    UploadImage
};




