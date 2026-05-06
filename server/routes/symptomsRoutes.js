const express = require("express");
const router = express.Router();

const {getAllAnalyses,analyseSymptoms} = require("../controllers/analyseSymptoms");

router.post("/analyse",analyseSymptoms);
router.get("/analyses",getAllAnalyses);
module.exports = router;