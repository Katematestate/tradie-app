const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlertSchema = new mongoose.Schema({
    alertType: {
        type: String,
        required: true,
    },
    alertReceiver: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'alertReceiverType'
    },
    alertReceiverType: {
        type: String,
        required: true,
        enum: ['User', 'Business']
    },
    alertContent: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Alert = mongoose.model('Alert', AlertSchema);
module.exports = Alert;