const Business = require("../../models/business");
const listBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = listBusinesses;
