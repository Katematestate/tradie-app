const Job = require("../../models/job");

const deleteJob = async (req, res) => {
    try {
        const toDeleteJob = await Job.findByIdAndDelete({ _id: req.params.id });
        res.json(toDeleteJob)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting job" });
    }
}

module.exports = deleteJob;