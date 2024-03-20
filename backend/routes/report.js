const express = require('express');
const router = express.Router();
const { saveReportController} = require('../controllers/report');
const path = require('path');
const { verifyAdmin, verifyMarketing,verifyprduct } = require('../authMiddleware');











router.post('/save',saveReportController);














module.exports = router;