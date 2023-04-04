const User = require("../../models/user");
const listUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error getting users" });
    }
}

module.exports = listUsers;
