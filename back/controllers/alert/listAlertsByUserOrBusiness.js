const Alert = require('../../models/Alert');

const listAlertsByUserOrBusiness = async (req, res, receiverType) => {
  try {
    const id = receiverType === 'User' ? req.params.userId : req.params.businessId;
    const alerts = await Alert.find({ alertReceiver: id, alertReceiverType: receiverType });

    if (alerts.length === 0) {
      return res.status(404).json({ message: `No alerts found for this ${receiverType}` });
    }
    res.json(alerts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = listAlertsByUserOrBusiness;