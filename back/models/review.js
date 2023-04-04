const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    businessUser: {
        type: Schema.Types.ObjectId,
        ref: 'Business'
    },
    rating: {
        
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;