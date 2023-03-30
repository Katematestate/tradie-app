const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
});
// = new mongoose.Schema({fname:String,lname:String})
const User = mongoose.model("User", UserSchema);
module.exports = User