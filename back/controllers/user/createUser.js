const User = require("../../models/user");
const createPassword = require('../password/createPassword');;
const { hashPassword } = require("../../utils/passwordHashing");

const createUser = async (req, res) => {
    try {
        const { password, name, email } = req.body;

        // check if this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        // First, create the User document with a temporary password field
        const newUser = new User({
            password: null,
            name,
            email,
            jobs: [],
            alerts: [],
            lastJobRequest: {}
        });
        await newUser.save();

        // Then, hash the password
        const hashedPassword = await hashPassword(password);

        // Next, create the Password document using the createPassword function and include the userId
        const passwordReq = {
            body: {
                userId: newUser._id,
                businessId: null,
                hash: hashedPassword
            }
        };
        const passwordRes = {
            status: (code) => {
                return {
                    json: (data) => data
                };
            }
        };
        const newPassword = await createPassword(passwordReq, passwordRes);

        // Finally, update the User document with the ObjectId of the newly created Password document
        newUser.password = newPassword._id;
        await newUser.save();

        res.json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating user" });
    }
}

module.exports = createUser;
