const Review = require('../../models/Review');

const listReviews = async (req, res) => {
    try {
        const allReviews = await Review.find({});

        if (allReviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found' });
        }

        res.json(allReviews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = listReviews;