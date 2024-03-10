
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadImageController,  getImageController,  getAllModelsController} = require('../controllers/Demandprediction');
const path = require('path');
const { verifyAdmin, verifyMarketing,verifyprduct } = require('../authMiddleware');



// Specify the destination and filename for multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{

    cb(null,'public/images')
  },

  
  filename:(req, file, cb)=> {
    cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
  
})


const upload = multer({ storage: storage });

// Route for uploading an image
// router.post('/upload', upload.single('image'), uploadImageController);
router.post('/upload/:modelNumber', upload.single('image'), uploadImageController);
router.get('/allModels', getAllModelsController);
router.get('/getImage/:modelNumber',getImageController);


// router.get('/getData/:modelNumber', verifyAdmin , getImageByModelNumber);
router.get("/allModels",  getAllModelsController);
// router.post('/upload/:modelNumber',UploadImage);





module.exports = router;

