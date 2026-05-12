require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDb = require("./config/database");
const symptomsRoutes = require("./routes/symptomsRoutes")
const authRoutes = require("./routes/authRoutes");
app.use(express.json());

app.get("/", (request, response) => {
  response.send("AI symptom checker with triage prioritization.");
});

const PORT = process.env.PORT || 3000;

app.use("/",symptomsRoutes);
app.use("/",authRoutes);
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
