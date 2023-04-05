const Alert = require('../../models/Alert');

const updateAlert = async (req, res) => {
  try {
    const updatedAlert = await Alert.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedAlert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json(updatedAlert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateAlert;