const Review = require("../../models/Review");

const createReview = async (req, res) => {
  try {
    const newReview = new Review({
      reviewer: req.body.reviewer,
      businessUser: req.body.businessUser,
      rating: req.body.rating,
      comment: req.body.comment,
      // createdAt is automatically created by mongoose using default value in model
    });

    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = createReview;
