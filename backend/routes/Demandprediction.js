// const express = require('express');
// const router = express.Router();
// const multer = require('multer'); 

// const { UploadImage } = require('../controllers/Demandprediction'); 

// // Configure Multer
// const upload = multer({ dest: 'uploads/' });

// // Use Multer middleware for handling file uploads
// router.post('/Upload', upload.single('image'), UploadImage);




// module.exports = router;

// DemandpredictionRouter.js
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const {UploadImage} = require('../controllers/Demandprediction');
const { getImageByModelNumber } = require('../controllers/Demandprediction');
const { GetAllModels } = require('../controllers/Demandprediction');
//const { decode } = require('jsonwebtoken');
// const upload = multer({ dest: '/uploads' });




router.get('/getData/:modelNumber', getImageByModelNumber);
router.get("/allModels", GetAllModels);
router.post('/upload/:modelNumber',UploadImage);

module.exports = router;



// console.log("this is router")
