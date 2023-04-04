const express = require("express");
const router = express.Router();

const { listReviews, createReview, getReview, updateReview, deleteReview, getReviewsByUser } = require('../controllers/review');

// GET All Reviews
router.get('/', async (req, res) => {
    listReviews(req, res);
});

// POST new Review
router.post('/', async (req, res) => {
    await createReview(req, res);
});

// GET (single) Review by ID
router.get('/:id', async (req, res) => {
    getReview(req, res);
});

// UPDATE a Review by ID
router.put('/:id', async (req, res) => {
    updateReview(req, res);
});

// DELETE a Review by ID
router.delete('/:id', async (req, res) => {
    deleteReview(req, res);
});

// GET Reviews by User ID
router.get('/user/:id', async (req, res) => {
    getReviewsByUser(req, res);
});

module.exports = router;