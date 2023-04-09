const express = require("express");
const router = express.Router();

const {
  listAlerts,
  createAlert,
  getAlert,
  deleteAlert,
  updateAlert,
  listAlertsByUserOrBusiness,
} = require("../controllers/alert");

// GET (all) Alerts route
router.get("/", async (req, res) => {
  listAlerts(req, res);
});

// POST new Alert
router.post("/", createAlert);

// GET (single) Alert by ID
router.get("/:id", getAlert);

// DELETE an Alert by ID
router.delete("/:id", deleteAlert);

// UPDATE an Alert by ID
router.put("/:id", updateAlert);

// GET all Alerts containing User's ID
router.get("/user/:userId", (req, res) =>
  listAlertsByUserOrBusiness(req, res, "user")
);

// GET all Alerts containing Business's ID
router.get("/business/:businessId", (req, res) =>
  listAlertsByUserOrBusiness(req, res, "business")
);

module.exports = router;
