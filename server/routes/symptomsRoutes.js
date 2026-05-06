const express = require("express");
const router = express.Router();

const analyseSymptoms = require("../controllers/analyseSymptoms")

router.post("/analyse",analyseSymptoms);

module.exports = router;