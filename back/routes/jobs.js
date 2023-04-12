const express = require("express");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

const router = express.Router();

const {
  listJobs,
  createJob,
  getJob,
  deleteJob,
  updateJob,
  listJobsByUserOrBusiness,
} = require("../controllers/job");

// GET (all) Jobs route
router.get("/", listJobs);

// POST new Job
router.post("/", jwtMiddleware, createJob);

// UPDATE a Job by ID
router.put("/:id", jwtMiddleware, updateJob);

// DELETE a Job by ID
router.delete("/:id", jwtMiddleware, deleteJob);

// GET all Jobs containing User's ID
router.get("/user/", jwtMiddleware, listJobsByUserOrBusiness);

// GET all Jobs containing Business's ID
router.get("/business/", jwtMiddleware, listJobsByUserOrBusiness);

// GET (single) Job by ID
router.get("/:id", getJob);

module.exports = router;
