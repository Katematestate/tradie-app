const Alert = require('../../models/Alert');

const getAlert = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json(alert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAlert;