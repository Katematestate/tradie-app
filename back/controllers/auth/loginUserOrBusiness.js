require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Business = require("../../models/business");
const Password = require("../../models/password");
const { verifyPassword } = require("../../utils/passwordHashing");
const loginUserOrBusiness = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if a user or business with the provided email exists
    const user = await User.findOne({ email });
    const business = await Business.findOne({ email });

    if (!user && !business) {
      return res.status(401).json({ message: "Invalid email." });
    }

    // Get the associated password document
    const passwordQuery = user
      ? { userId: user._id }
      : { businessId: business._id };
    const storedPassword = await Password.findOne(passwordQuery);

    // Compare the provided password with the stored password hash
    const isPasswordMatch = await verifyPassword(password, storedPassword.hash);
    if (!isPasswordMatch) {
      res.status(401).json({ message: "Invalid password." });
      return;
    }
    const token = jwt.sign(
      { id: user?.id ?? business.id },
      process.env.AUTH_SECRET_KEY
    );
    res.json({
      token,
      id: user?.id ?? business.id,
    });
  } catch (error) {
    console.error("Error in loginUserOrBusiness:", error);
    res.status(500).json({ message: "Error logging in user or business." });
  }
};

module.exports = loginUserOrBusiness;
