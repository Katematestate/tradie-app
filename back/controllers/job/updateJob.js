const Job = require("../../models/job");

const updateJob = async (req, res) => {
    try {
        const toUpdateJob = await Job.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(toUpdateJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = updateJob;