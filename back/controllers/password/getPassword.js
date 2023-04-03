const Password = require("../../models/password");

const getPassword = async (req, res) => {
    try {
        const password = await Password.findById(req.params.id);
        res.json(password);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting password by ID" });
    }
};

module.exports = getPassword;