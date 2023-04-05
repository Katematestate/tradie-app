const express = require("express");
const router = express.Router();

const { listAlerts, createAlert, getAlert, deleteAlert, updateAlert, listAlertsByUserOrBusiness } = require('../controllers/alert');

// GET (all) Alerts route
router.get('/', async (req, res) => {
    listAlerts(req, res)
});

// POST new Alert
router.post('/', async (req, res) => {
    createAlert(req, res)
});

// GET (single) Alert by ID
router.get('/:id', async (req, res) => {
    getAlert(req, res)
});

// DELETE an Alert by ID
router.delete('/:id', async (req, res) => {
    deleteAlert(req, res)
});

// UPDATE an Alert by ID
router.put('/:id', async (req, res) => {
    updateAlert(req, res)
});

// GET all Alerts containing User's ID
router.get("/user/:userId", async (req, res) => {
    listAlertsByUserOrBusiness(req, res, 'User')
});

// GET all Alerts containing Business's ID
router.get("/business/:businessId", async (req, res) => {
    listAlertsByUserOrBusiness(req, res, 'Business')
});

module.exports = router;