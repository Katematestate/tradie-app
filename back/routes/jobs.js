const express = require("express");
const router = express.Router();

const { listJobs, createJob, getJob, deleteJob, updateJob, listJobsByUserOrBusiness } = require('../controllers/job');

// GET (all) Jobs route
router.get('/', async (req, res) => {
    listJobs(req, res)
});

// POST new Job
router.post('/', async (req, res) => {
    createJob(req, res)
});

// GET (single) Job by ID
router.get('/:id', async (req, res) => {
    getJob(req, res)
});

// DELETE a Job by ID
router.delete('/:id', async (req, res) => {
    deleteJob(req, res)
});

// UPDATE a Job by ID
router.put('/:id', async (req, res) => {
    updateJob(req, res)
});

// GET all Jobs containing User's ID
router.get("/user/:userId", async (req, res) => {
    listJobsByUserOrBusiness(req, res)
});

// GET all Jobs containing Business's ID
router.get("/business/:businessId", async (req, res) => {
    listJobsByUserOrBusiness(req, res)
});

module.exports = router;