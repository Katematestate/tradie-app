const Business = require("../../models/business");
const getBusiness = async (req, res) => {
    try {
        const IDed_Business = await Business.findById({ _id: req.params.id });
        res.json(IDed_Business);
    } catch (error) {
        res.status(404).json({ message: "Business not found" });
    }
}

module.exports = getBusiness;