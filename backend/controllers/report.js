

const { saveReport ,getReportData,  getNoteData  } = require('../service/report');

const saveReportController = async (req, res) => {
    try {
        const reportData = req.body;
        console.log('Saving report:', reportData);

        const savedReport = await saveReport(reportData);
        console.log(savedReport , "this is the saved report")

        if (savedReport) {
            console.log('Report saved successfully:', savedReport);
            return res.status(200).json({
                success: true,
                message: 'Report saved successfully',
                data: savedReport
            });
        } else {
            console.log('Failed to save report');
            return res.status(500).json({
                success: false,
                message: 'Failed to save report'
            });
        }
    } catch (error) {
        console.log('Error in saveReportController:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while saving the report',
            error: error.message
        });
    }
};



const GetReport = async (_, res) => {
    try {
        const data = await getReportData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const GetNote = async (_, res) => {
    try {
        const data = await getNoteData();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    saveReportController,GetReport,GetNote
};

