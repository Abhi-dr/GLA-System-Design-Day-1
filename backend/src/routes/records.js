const express = require("express");
const Record = require("../models/Record");
const router = express.Router();

// Baseline: intentionally returns every record for the first experiment.
router.get("/all", async (req, res) => {
  try {
    const records = await Record.find({}).sort({ _id: 1 }).lean();
    res.json({ records });
  } catch (error) {
    console.error("GET /api/records/all failed:", error);
    res.status(500).json({ message: "Failed to load all records" });
  }
});



router.get("/", async (req, res) => {
  try {
    const records = await Record.find({}).sort({ _id: 1 }).lean();
    res.json({ records });
  } catch (error) {
    console.error("GET /api/records failed:", error);
    res.status(500).json({ message: "Failed to load records" });
  }
});

module.exports = router;
