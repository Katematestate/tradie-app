const mongoose = require('mongoose');
const { Schema } = mongoose;

const Job = require('./job');
const Alert = require('./alert');
const Password = require('./password');

const UserSchema = new mongoose.Schema({
    password: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Password'
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Job',
    }],
    alerts: [{
        type: Schema.Types.ObjectId,
        ref: 'Alert',
    }],
    lastJobRequest: {
        jobName: String,
        location: String,
        jobDescription: String,
        jobImage: String,
        client: {
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
        }
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;