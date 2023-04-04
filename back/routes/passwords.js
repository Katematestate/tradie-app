const express = require("express");
const router = express.Router();

const { createPassword, getPassword, updatePassword, deletePassword } = require('../controllers/password');

// POST new Password
router.post('/', async (req, res) => {
    await createPassword(req, res);
});

// GET (single) Password by ID
router.get('/:id', async (req, res) => {
    getPassword(req, res);
});

// UPDATE a Password by ID
router.put('/:id', async (req, res) => {
    updatePassword(req, res);
});

// DELETE a Password by ID
router.delete('/:id', async (req, res) => {
    deletePassword(req, res);
});

// GET Password by User ID
router.get('/user/:id', async (req, res) => {
    getPasswordByUserOrBusiness(req, res, 'user');
});

// GET Password by Business ID
router.get('/business/:id', async (req, res) => {
    getPasswordByUserOrBusiness(req, res, 'business');
});

module.exports = router;