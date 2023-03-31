const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./user');
const Business = require('./business');

const JobSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    business: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Business',
    },
    client: {
        type: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: Number,
                required: true,
            }
        },
        required: true
    },
    jobTitle: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    jobImage: {
        type: String,
    },
    jobLocation: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in progress', 'completed', 'declined'],
    },
    clientReview: {
        type: String,
    },
    jobQuote: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;