const Business = require("../../models/business");
const createPassword = require("../password/createPassword");
const { hashPassword } = require("../../utils/passwordHashing");

const createBusiness = async (req, res) => {
  try {
    const {
      password,
      businessName,
      email,
      companyLogo,
      companyImage,
      businessPhoneNumber,
      businessWebsite,
      businessLocation,
      businessDescription,
      skills,
      pastWorks,
    } = req.body;
    console.log(req.body);
    // First, create the Business document with a temporary password field
    const newBusiness = new Business({
      password: null,
      businessName,
      email,
      companyLogo,
      companyImage,
      businessPhoneNumber,
      businessWebsite,
      businessLocation,
      businessDescription,
      jobs: [],
      alerts: [],
      skills,
      pastWorks,
    });
    await newBusiness.save();

    // Then, hash the password
    const hashedPassword = await hashPassword(password);

    // Next, create the Password document using the createPassword function and include the businessId
    const passwordReq = {
      body: {
        userId: null,
        businessId: newBusiness._id,
        hash: hashedPassword,
      },
    };
    const passwordRes = {
      status: (code) => {
        return {
          json: (data) => data,
        };
      },
    };
    const newPassword = await createPassword(passwordReq, passwordRes);

    // Finally, update the Business document with the ObjectId of the newly created Password document
    newBusiness.password = newPassword._id;
    await newBusiness.save();

    res.json(newBusiness);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = createBusiness;
