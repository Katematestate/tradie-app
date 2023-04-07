const express = require("express");
const router = express.Router();
const { loginUserOrBusiness } = require('../controllers/auth');

// POST login
router.post('/login', async (req, res) => {
    await loginUserOrBusiness(req, res);
});

module.exports = router;