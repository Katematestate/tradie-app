const Job = require("../../models/job");

const listJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting jobs" });
    }
}

module.exports = listJobs;
