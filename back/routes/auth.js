const express = require("express");
const router = express.Router();
const { loginUserOrBusiness } = require("../controllers/auth");

// POST login
router.post("/login", loginUserOrBusiness);

module.exports = router;
