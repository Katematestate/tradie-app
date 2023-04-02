const Password = require("../../models/password");

const getPasswordByUserOrBusiness = async (req, res, type) => {
    try {
        const query = type === 'user' ? { userId: req.params.id } : { businessId: req.params.id };
        const password = await Password.findOne(query);
        res.json(password);
    } catch (err) {
        console.log(err);
        const errorMsg = type === 'user'
            ? "Error getting password by User ID"
            : "Error getting password by Business ID";
        res.status(500).json({ message: errorMsg });
    }
};

module.exports = getPasswordByUserOrBusiness;