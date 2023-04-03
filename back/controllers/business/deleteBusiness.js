const Business = require("../../models/business");
const deleteBusiness = async (req, res) => {
    try {
        const toDelete_Business = await Business.findByIdAndDelete({ _id: req.params.id });
        res.json(toDelete_Business);
    } catch (error) {
        res.status(404).json({ message: "Business not found" });
    }
}

module.exports = deleteBusiness;
