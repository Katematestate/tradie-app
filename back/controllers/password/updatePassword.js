const Password = require("../../models/password");

const updatePassword = async (req, res) => {
    try {
        const updated_password = await Password.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated_password);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error updating password" });
    }
};

module.exports = updatePassword;