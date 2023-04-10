const express = require("express");
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
router.post("/", createJob);

// GET (single) Job by ID
router.get("/:id", getJob);

// DELETE a Job by ID
router.delete("/:id", deleteJob);

// UPDATE a Job by ID
router.put("/:id", updateJob);

// GET all Jobs containing User's ID
router.get("/user/:userId", listJobsByUserOrBusiness);

// GET all Jobs containing Business's ID
router.get("/business/:businessId", listJobsByUserOrBusiness);

module.exports = router;
