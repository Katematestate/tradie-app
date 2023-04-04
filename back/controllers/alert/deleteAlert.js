const Alert = require('../../models/Alert');

const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json({ message: 'Alert deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = deleteAlert;