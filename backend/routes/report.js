const express = require('express');
const router = express.Router();
const { saveReportController,GetReport } = require('../controllers/report');
const path = require('path');
const { verifyAdmin, verifyMarketing,verifyprduct } = require('../authMiddleware');




router.post('/save',saveReportController);

router.get('/getReport',GetReport );













module.exports = router;