const Review = require('../../models/Review');

const getReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const foundReview = await Review.findById(reviewId);

        if (!foundReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json(foundReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = getReview;