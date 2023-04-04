const Password = require("../../models/password");

const createPassword = async (req, res) => {
    try {
        const { userId, businessId, hash } = req.body;

        if (!userId && !businessId) {
            return res.status(400).json({ message: "Either userId or businessId must be provided." });
        }
        if (userId && businessId) {
            return res.status(400).json({ message: "Cannot reference both userId and businessId." });
        }
        if (!hash) {
            return res.status(400).json({ message: "Hash is required." });
        }

        const new_password = new Password({ userId, businessId, hash });
        await new_password.save();
        res.status(201).json(new_password);
        return new_password;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating password" });
    }
};

module.exports = createPassword;