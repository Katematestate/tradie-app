const Business = require("../../models/business");

const listBusinesses = async (req, res) => {
  try {
    const { businessName, businessLocation, skills } = req.query;
    const query = {};

    if (businessName) {
      query.businessName = new RegExp(businessName, "i");
    }
    if (businessLocation) {
      query.businessLocation = new RegExp(businessLocation, "i");
    }
    if (skills) {
      query.skills = { $in: [skills] };
    }

    const businesses = await Business.find(query).select(
      "pastWorks businessDescription businessLocation businessWebsite businessPhoneNumber businessName companyImage companyLogo skills"
    );
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = listBusinesses;
