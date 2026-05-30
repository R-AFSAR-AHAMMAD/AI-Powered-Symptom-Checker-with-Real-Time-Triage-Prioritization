const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getAllAnalyses,
  analyseSymptoms,
  getAnalysis,
  deleteAnalysis,
  updateAnalysis,
} = require("../controllers/analyseSymptoms");

router.post(
  "/analyses",
  authMiddleware,
  roleMiddleware("receptionist"),
  analyseSymptoms,
);
router.get(
  "/analyses",
  authMiddleware,
  roleMiddleware("receptionist", "doctor"),
  getAllAnalyses,
);
router.get(
  "/analyses/:id",
  authMiddleware,
  roleMiddleware("receptionist", "doctor"),
  getAnalysis,
);

router.put(
  "/analyses/:id",
  authMiddleware,
  roleMiddleware("receptionist", "doctor"),
  updateAnalysis,
);

router.delete(
  "/analyses/:id",
  authMiddleware,
  roleMiddleware("doctor"),
  deleteAnalysis,
);
module.exports = router;
