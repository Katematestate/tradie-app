const Alert = require('../../models/Alert');

const listAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({});
    res.json(alerts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = listAlerts;