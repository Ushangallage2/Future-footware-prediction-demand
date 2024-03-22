const express = require("express");
const multer = require('multer');
const router = express.Router();
const path = require('path');
const { verifyAdmin, verifyMarketing, verifyprduct } = require('../authMiddleware');
const { UploadFiles, GetSalesData } = require('../controllers/ManageSalesData');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },

  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });
const uploadFiles = multer({ dest: 'uploads/' });


router.post('/uploadFiles', uploadFiles.array('files', 5), UploadFiles);
router.get('/getSalesData', GetSalesData);

module.exports = router;