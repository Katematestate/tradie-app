const Business = require("../../models/business");
const publicGetBusiness = async (req, res) => {
  try {
    const IDed_Business = await Business.findById(
      { _id: req.params.id }.select("businessName companyImage")
    );
    res.json(IDed_Business);
  } catch (error) {
    res.status(404).json({ message: "Business not found" });
  }
};

module.exports = publicGetBusiness;
