const Job = require("../../models/job");

const getJob = async (req, res) => {
    try {
        const foundJob = await Job.findById({ _id: req.params.id });
        res.json(foundJob);
    } catch (error) {
        res.status(404).json({ message: "Job not found" });
    }
}

module.exports = getJob;