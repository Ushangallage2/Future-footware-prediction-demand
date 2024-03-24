const express = require('express');
const router = express.Router();
const { saveReportController,GetReport,GetNote } = require('../controllers/report');
const path = require('path');
const { verifyAdmin, verifyMarketing,verifyprduct } = require('../authMiddleware');




router.post('/save',saveReportController);

router.get('/getReport',GetReport );



router.get('/getNote',GetNote );









module.exports = router;