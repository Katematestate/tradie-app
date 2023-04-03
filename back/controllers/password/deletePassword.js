const Password = require("../../models/password");

const deletePassword = async (req, res) => {
    try {
        await Password.findByIdAndDelete(req.params.id);
        res.json({ message: "Password deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting password" });
    }
};

module.exports = deletePassword;