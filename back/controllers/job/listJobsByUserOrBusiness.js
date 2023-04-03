const Job = require("../../models/job");

const listJobsByUserOrBusiness = async (req, res) => {
    try {
        const { userId, businessId } = req.params;
        const query = {};

        if (userId) {
            query.user = userId;
        }
        if (businessId) {
            query.business = businessId;
        }

        const jobs = await Job.find(query);
        res.json(jobs)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting jobs" });
    }
}

module.exports = listJobsByUserOrBusiness;