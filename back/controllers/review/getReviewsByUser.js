const Review = require('../../models/Review');

const getReviewsByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userReviews = await Review.find({ reviewer: userId });

        if (userReviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this user' });
        }

        res.json(userReviews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = getReviewsByUser;