require("dotenv").config();

const express = require("express");
const app = express();
const connectDb = require('./config/database');
const mongoose = require('mongoose');

app.use(express.json());

app.get("/", (request, response) => {
  response.send("AI symptom checker with triage prioritization.");
});

const PORT = process.env.PORT || 3000;

const symptomSchema = new mongoose.Schema({
  symptoms:{
    type:[String],
    required:true
  },
  severity:String,
  recommendation:String
});

const Symptom = mongoose.model("Symptom",symptomSchema);

const initialiseDbAndServer = async () => {

  await connectDb();
  try {
    app.listen(PORT, () => {
      console.log(`server has started at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(`Error Occurred: ${e.message}`);
    process.exit(1);
  }
};

initialiseDbAndServer();