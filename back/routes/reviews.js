const express = require("express");
const router = express.Router();

const {
  listReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getReviewsByUser,
} = require("../controllers/review");

// GET All Reviews
router.get("/", listReviews);

// POST new Review
router.post("/", createReview);

// GET (single) Review by ID
router.get("/:id", getReview);

// UPDATE a Review by ID
router.put("/:id", updateReview);

// DELETE a Review by ID
router.delete("/:id", deleteReview);

// GET Reviews by User ID
router.get("/user/:id", getReviewsByUser);

module.exports = router;
