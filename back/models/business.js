const mongoose = require('mongoose');
const { Schema } = mongoose;

const Job = require('./job');
const Alert = require('./alert');
const Password = require('./password');

const BusinessSchema = new mongoose.Schema({
    password: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Password'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    companyLogo: {
        type: String,
        required: true
    },
    companyImage: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true,
    },
    businessPhoneNumber: {
        type: String,
        required: true,
    },
    businessWebsite: {
        type: String,
        required: true
    },
    businessLocation: {
        type: String,
        required: true,
    },
    businessDescription: {
        type: String,
        required: true,
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Job',
    }],
    alerts: [{
        type: Schema.Types.ObjectId,
        ref: 'Alert',
    }],
    skills: [String],
    pastWorks: [{
        beforePhoto: {
            type: String,
            required: true,
        },
        afterPhoto: {
            type: String,
            required: true,
        },
    }],
});

const Business = mongoose.model('Business', BusinessSchema);
module.exports = Business;