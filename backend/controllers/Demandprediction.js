


const { getAllModels } = require('../service/Demandprediction');
const { updateModelImage,getImageByModelNumber} = require('../service/Demandprediction');



















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

    console.log(image)
    console.log(modelNumber)
    // Ensure that image and modelNumber are provided
    if (!image || !modelNumber) {
      return res.status(400).json({ error: 'Missing image or modelNumber' });
    }
  
    updateModelImage(modelNumber, image)
      .then(() => {
        res.json({ status: 'Success' });
      })
      .catch((error) => {
        console.error('Error updating model image:', error);
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
      console.error(error);
      res.status(404).json({ error: 'Image not found' });
    }
  };




const getAllModelsController = async (req, res) => {
  try {
    const modelNumbers = await getAllModels();
    res.status(200).json({ modelNumbers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const predictSales =  async (req, res) => {
  console.log(req.body)
  const days= req.body.days;
  const shoeModel = req.body.shoe_model;
  try {
    const predictedSales = await SalesCount(days,shoeModel);
    res.json({ predictedSales }); // Send the results in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};





module.exports = {uploadImageController,getImageController,
 
  getAllModelsController, predictSales
};






   















