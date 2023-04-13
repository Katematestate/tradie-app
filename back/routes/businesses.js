const express = require("express");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

const router = express.Router();
const {
  listBusinesses,
  createBusiness,
  getBusiness,
  publicGetBusiness,
  me,
  deleteBusiness,
  updateBusiness,
} = require("../controllers/business");

// GET (all) Businesses route
router.get("/", listBusinesses);

// POST new Business with hashed password
router.post("/", createBusiness);

// GET my authenticated business
router.get("/me", jwtMiddleware, me);

// GET (single) Business by ID
router.get("/:id", jwtMiddleware, getBusiness);

// GET (single) Business by ID without authentication
// and dont return password id or email
router.get("/public/:id", publicGetBusiness);

// DELETE a Business by ID
router.delete("/:id", jwtMiddleware, deleteBusiness);

// UPDATE a Business by ID
router.put("/:id", jwtMiddleware, updateBusiness);

module.exports = router;
