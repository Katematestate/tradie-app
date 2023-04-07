const Review = require('../../models/Review');

const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json({ message: 'Review deleted successfully', deletedReview });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = deleteReview;