const Job = require("../../models/job");

const createJob = async (req, res) => {
    try {
        const newJob = new Job({
            user: req.body.userId,
            business: req.body.businessId,
            client: req.body.client,
            jobTitle: req.body.jobTitle,
            jobDescription: req.body.jobDescription,
            jobImage: req.body.jobImage,
            jobLocation: req.body.jobLocation,
            status: req.body.status,
            clientReview: null,
            jobQuote: req.body.jobQuote,
            // date created is automatically created by mongoose using default value in model
        });
        const savedJob = await newJob.save()
        res.json(savedJob)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = createJob;
