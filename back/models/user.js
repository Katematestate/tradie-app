const mongoose = require('mongoose');

// import jobSchema from ""
// import alertSchema from ""

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobs: [jobSchema],
    alerts: [alertSchema],
    lastJobRequest: {

    },
});
// = new mongoose.Schema({fname:String,lname:String})
const User = mongoose.model("User", UserSchema);
module.exports = User