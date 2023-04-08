const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const {
  listUsers,
  createUser,
  getUser,
  me,
  deleteUser,
  updateUser,
} = require("../controllers/user");

// GET (all) Users route
router.get("/", listUsers);

// POST new User
router.post("/", createUser);

// GET my authenticated user
router.get("/me", jwtMiddleware, me);

// GET (single) User by ID
router.get("/:id", jwtMiddleware, getUser);

// DELETE a User by ID
router.delete("/:id", jwtMiddleware, deleteUser);

// UPDATE a User by ID
router.put("/:id", jwtMiddleware, updateUser);

module.exports = router;
