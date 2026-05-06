const Symptom = require("../models/Symptom");
const triage = require("../utils/triage");

const analyseSymptoms = async (req, res) => {
  try {
    const { symptoms, age, gender } = req.body;

    const result = triage(symptoms, age, gender);

    const record = new Symptom({
      age,
      gender,
      symptoms,
      severity: result.severity,
      recommendation: result.recommendation,
    });

    await record.save();

    res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = analyseSymptoms;