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
router.get("/", async (req, res) => {
  await listUsers(req, res);
});

// POST new User
router.post("/", async (req, res) => {
  await createUser(req, res);
});

// GET my authenticated user
router.get("/me", jwtMiddleware, me);

// GET (single) User by ID
router.get("/:id", jwtMiddleware, async (req, res) => {
  getUser(req, res);
});

// DELETE a User by ID
router.delete("/:id", jwtMiddleware, async (req, res) => {
  deleteUser(req, res);
});

// UPDATE a User by ID
router.put("/:id", jwtMiddleware, async (req, res) => {
  updateUser(req, res);
});

module.exports = router;
