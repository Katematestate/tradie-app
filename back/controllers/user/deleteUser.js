const User = require("../../models/user");
const deleteUser = async (req, res) => {
    try {
        const toDelete_User = await User.findByIdAndDelete({ _id: req.params.id });
        res.json(toDelete_User)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting user" });
    }
}

module.exports = deleteUser;
