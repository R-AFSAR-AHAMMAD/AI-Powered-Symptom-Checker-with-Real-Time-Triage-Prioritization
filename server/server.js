require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDb = require("./config/database");
const Symptom = require("./models/Symptom");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("AI symptom checker with triage prioritization.");
});

const PORT = process.env.PORT || 3000;

app.post("/analyse", async (req, res) => {
  try {
    const { symptoms, age, gender } = req.body;

    const result = {
      severity: "low",
      recommendation: "Rest and monitor",
    };

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
});

const initialiseDbAndServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`server has started at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(`Error: ${e.message}`);
    process.exit(1);
  }
};

initialiseDbAndServer();
