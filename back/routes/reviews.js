const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middlewares/jwtMiddleware");

const {
  listReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getReviewsByUser,
  listReviewsByBusiness,
} = require("../controllers/review");

// POST new Review
router.post("/", jwtMiddleware, createReview);

// GET (single) Review by ID
router.get("/:id", getReview);

// UPDATE a Review by ID
router.put("/:id", jwtMiddleware, updateReview);

// DELETE a Review by ID
router.delete("/:id", jwtMiddleware, deleteReview);

// GET Reviews by User ID
router.get("/user/:id", getReviewsByUser);

// GET Reviews of Business by Business ID
router.get("/business/:id", listReviewsByBusiness);

// GET All Reviews
router.get("/", listReviews);

module.exports = router;
