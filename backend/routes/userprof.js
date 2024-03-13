const express = require("express");
const multer = require('multer');
const router = express.Router();
const path = require('path');
const { verifyAdmin, verifyMarketing,verifyprduct } = require('../authMiddleware');
const { sendImageController,getProfImageController} = require("../controllers/userprof");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
  
      cb(null,'public/images')
    },

      
  filename:(req, file, cb)=> {
    cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }

})


const upload = multer({ storage: storage });

router.post('/upload/:id', upload.single('image'), sendImageController);
router.get('/getProfImage/:id',getProfImageController);


module.exports = router;