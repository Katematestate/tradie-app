const express = require("express");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

const router = express.Router();
const {
  listBusinesses,
  createBusiness,
  getBusiness,
  deleteBusiness,
  updateBusiness,
} = require("../controllers/business");

// GET (all) Businesses route
router.get("/", async (req, res) => {
  listBusinesses(req, res);
});

// POST new Business with hashed password
router.post("/", async (req, res) => {
  createBusiness(req, res);
});

// GET (single) Business by ID
router.get("/:id", jwtMiddleware, async (req, res) => {
  getBusiness(req, res);
});

// DELETE a Business by ID
router.delete("/:id", jwtMiddleware, async (req, res) => {
  deleteBusiness(req, res);
});

// UPDATE a Business by ID
router.put("/:id", jwtMiddleware, async (req, res) => {
  updateBusiness(req, res);
});

module.exports = router;
