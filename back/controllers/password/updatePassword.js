const Password = require("../../models/password");
const { hashPassword } = require("../../utils/passwordHashing");
const updatePassword = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    const updated_password = await Password.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { hash: hashedPassword },
      }
    );
    res.json(updated_password);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating password" });
  }
};

module.exports = updatePassword;
