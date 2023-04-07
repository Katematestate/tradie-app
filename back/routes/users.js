const express = require("express");
const router = express.Router();
const {
  listUsers,
  createUser,
  getUser,
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

// GET (single) User by ID
router.get("/:id", async (req, res) => {
  getUser(req, res);
});

// DELETE a User by ID
router.delete("/:id", async (req, res) => {
  deleteUser(req, res);
});

// UPDATE a User by ID
router.put("/:id", async (req, res) => {
  updateUser(req, res);
});

module.exports = router;
