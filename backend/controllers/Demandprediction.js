const { getAllModels, getModelDetails } = require('../service/Demandprediction');
const { updateModelImage,getImageByModelNumber,SalesCount} = require('../service/Demandprediction');


// const uploadImageController = (req, res) => {
//   const image = req.file.filename;
//   const { modelNumber } = req.params;

//   updateModelImage(image)
//     .then(() => {
//       res.json({ status: 'Success' });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// };


const uploadImageController = (req, res) => {
    const image = req.file.filename;
    // const { modelNumber } = req.params;
    const { modelNumber } = req.params;

    // Ensure that image and modelNumber are provided
    if (!image || !modelNumber) {
      return res.status(400).json({ error: 'Missing image or modelNumber' });
    }
  
    updateModelImage(modelNumber, image)
      .then(() => {
        res.json({ status: 'Success' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };
  

  const getImageController = async (req, res) => {
    const { modelNumber } = req.params;
  
    try {
      // Get the image filename by modelNumber
      const filename = await getImageByModelNumber(modelNumber);
  
      // Construct the path to the image file
      const imagePath = `public/images/${filename}`;
  
      // Send the image file as a response
      res.sendFile(imagePath, { root: '.' });
    } catch (error) {
      res.status(404).json({ error: 'Image not found' });
    }
  };


  const getDetailsController = async (req, res) => {
    const { modelNumber } = req.params;
    
    try {
        // Get the model details by modelNumber
        const modelDetails = await getModelDetails(modelNumber);
        // Check if model details are found
        if (!modelDetails) {
            return res.status(404).json({ error: 'Model details not found' });
        }

        // Send the model details as a response
        res.json(modelDetails);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching model details' });
    }
};






const getAllModelsController = async (req, res) => {
  try {
    const modelNumbers = await getAllModels();
    res.status(200).json({ modelNumbers });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// const predictSales =  async (req, res) => {

//   console.log(req.body)
//   const days= req.body.days;
//   const shoeModel = req.body.shoe_model;
//   console.log(shoeModel)
//   console.log(days)
//   try {
//     const predictedSales = await SalesCount(days,shoeModel);
//     console.log(predictedSales)
//     res.json({ predictedSales }); 
//   } catch (error) {
 
//     console.log(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }

// };

const predictSales = async (req, res) => {
  const days = req.body.days;
  const shoeModel = req.body.shoe_model;
  try {
    const predictedSales = await SalesCount(days, shoeModel);
  

    // Filter out negative numbers and round each number to the nearest integer
    const filteredSales = predictedSales
      .map(([value]) => Math.round(value)) // Round each number
      .filter(value => value >= 0); // Filter out numbers less than 0
  
    // Calculate the sum of filteredSales
    const sum = filteredSales.reduce((acc, curr) => acc + curr, 0);



    res.json({ sum , filteredSales }); // Return the sum
  
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






module.exports = {uploadImageController,getImageController,
 
  getAllModelsController, predictSales,getDetailsController 
};






   















