// password can be referencing the userId or the businessId but not both
// so when we create a new passowrd we only populate one of them that's why only hash is required

const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./user');
const Business = require('./business');

const passwordSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    businessId: {
        type: Schema.Types.ObjectId,
        ref: 'Business',
    },
    hash: {
        type: String,
        required: true,
    },
});

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;