const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();



app.use(express.json());
app.get("/", (request, response) => {
  response.send("AI symptom checker with triage prioritization.");
});

const PORT = process.env.PORT || 3000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (e) {
    console.log(`Database connection failed: ${e.message}`);
    process.exit(1);
  }
};



const initializeDbAndServer = async () => {

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

initializeDbAndServer();
