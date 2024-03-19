const express = require('express');
const router = express.Router();
const viewReportsController = require('./controllers/viewReportsController');

router.get('/view-reports', viewReportsController.viewReports);
router.post('/get-model-number', viewReportsController.getModelNumber);

module.exports = router;
