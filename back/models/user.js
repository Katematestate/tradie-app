const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    password: {
        type: Schema.Types.ObjectId,
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
            },
            email: {
                type: String,
            },
            phoneNumber: {
                type: Number,
            }
        }
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;