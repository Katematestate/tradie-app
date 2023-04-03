const Review = require('../../models/Review');

const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const updatedReview = await Review.findByIdAndUpdate(
            reviewId,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = updateReview;