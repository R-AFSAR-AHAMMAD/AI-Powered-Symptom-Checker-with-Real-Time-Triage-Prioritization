const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema(
  {
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    symptoms: {
      type: [String],
      required: true,
    },
    severity: String,
    recommendation: String,
  },
  { timestamps: true },
);

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;
