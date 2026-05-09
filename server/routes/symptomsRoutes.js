const express = require("express");
const router = express.Router();

const {
  getAllAnalyses,
  analyseSymptoms,
  getAnalysis,
  deleteAnalysis,
  updateAnalysis,
} = require("../controllers/analyseSymptoms");

router.post("/analyses", analyseSymptoms);
router.get("/analyses", getAllAnalyses);
router.get("/analyses/:id", getAnalysis);
router.delete("/analyses/:id", deleteAnalysis);
router.put("/analyses/:id", updateAnalysis);

module.exports = router;
