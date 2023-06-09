const listReviews = require("./listReviews");
const createReview = require("./createReview");
const getReview = require("./getReview");
const updateReview = require("./updateReview");
const deleteReview = require("./deleteReview");
const getReviewsByUser = require("./getReviewsByUser");
const listReviewsByBusiness = require("./listReviewsByBusiness");

module.exports = {
  listReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
  getReviewsByUser,
  listReviewsByBusiness,
};
