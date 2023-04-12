const express = require("express");
const router = express.Router();

const {
  createPassword,
  getPassword,
  updatePassword,
  deletePassword,
  getPasswordByUserOrBusiness,
} = require("../controllers/password");

// POST new Password
router.post("/", createPassword);

// GET (single) Password by ID
router.get("/:id", getPassword);

// UPDATE a Password by ID
router.put("/:id", updatePassword);

// DELETE a Password by ID
router.delete("/:id", deletePassword);

// GET Password by User ID
router.get("/user/:id", getPasswordByUserOrBusiness);

// GET Password by Business ID
router.get("/business/:id", getPasswordByUserOrBusiness);

module.exports = router;
