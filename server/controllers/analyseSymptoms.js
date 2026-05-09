const { response } = require("express");
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

const getAllAnalyses = async (request, response) => {
  try {
    const analyses = await Symptom.find();
    response.json(analyses);
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};

const getAnalysis = async (request, response) => {
  try {
    const { id } = request.params;
    const analysis = await Symptom.findById(id);

    if (!analysis) {
      return response.status(404).json({ error: "Analysis not found" });
    }
    response.status(200).json(analysis);
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};

const deleteAnalysis = async (request, response) => {
  try {
    const { id } = request.params;
    const deletedAnalysis = await Symptom.findByIdAndDelete(id);

    if (!deletedAnalysis) {
      return response.status(404).json({ error: "Analysis not found" });
    }
    response.status(200).json({ message: "Analysis deleted successfully" });
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};

const updateAnalysis = async (request, response) => {
  const { id } = request.params;
  try {
    const updatedAnalysis = await Symptom.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (!updatedAnalysis) {
      return response.status(404).json({ error: "Analysis not found" });
    }
    response.status(200).json(updatedAnalysis);
  } catch (e) {
    response.status(500).json({ error: e.message });
  }
};

module.exports = {
  analyseSymptoms,
  getAnalysis,
  deleteAnalysis,
  getAllAnalyses,
  updateAnalysis,
};
