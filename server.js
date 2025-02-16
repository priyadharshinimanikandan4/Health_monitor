const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Set up Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/health-monitoring", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  bmi: String,
  symptoms: [String],
  medicationReminders: String,
  depressionAnswers: {
    sadness: Boolean,
    hopelessness: Boolean,
    fatigue: Boolean,
    interestLoss: Boolean,
    sleepDisturbance: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users.");
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).send("Error saving user data.");
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
