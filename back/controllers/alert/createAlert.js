const Alert = require('../../models/Alert');

const createAlert = async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    const savedAlert = await newAlert.save();
    res.json(savedAlert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createAlert;