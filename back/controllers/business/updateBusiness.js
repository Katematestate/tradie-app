const Business = require("../../models/business");
const { hashPassword } = require("../../utils/passwordHashing");

const updateBusiness = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = hashPassword(req.body.password);
        }
        const toUpdate_Business = await Business.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(toUpdate_Business);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = updateBusiness;
