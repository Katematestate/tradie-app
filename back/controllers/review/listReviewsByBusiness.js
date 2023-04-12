const Review = require("../../models/Review");

const listReviewsByBusiness = async (req, res) => {
  try {
    const businessId = req.params.businessId;
    const reviews = await Review.find({ businessUser: businessId });

    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }

    res.json(reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = listReviewsByBusiness;
