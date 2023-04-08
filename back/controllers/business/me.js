const jwt = require("jsonwebtoken");
const Business = require("../../models/business");
const me = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.AUTH_SECRET_KEY);

      req.userId = decoded.id;

      const business = Business.findOne({ _id: decoded.id });
      if (!business) {
        throw new Error("Business not found");
      }

      return res.status(200).json({
        message: "authentication successful",
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "authentication failed - invalid token lol" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "authentication failed - no token lol" });
  }
};

module.exports = me;
