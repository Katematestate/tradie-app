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
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    jobTitle: {
        type: String,
    },
    jobStatus: {
        type: String,
    },
    alertContent: {
        type: String,
        required: true
    }, 
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    seen: {
        type: Boolean,
        required:  true,
    }
});

const Alert = mongoose.model('Alert', AlertSchema);
module.exports = Alert;