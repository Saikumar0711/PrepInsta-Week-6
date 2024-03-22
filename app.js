const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const foodRoutes = require("./foodRoutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connecting  to the MongoDB
mongoose.connect("mongodb://localhost/food_nutrition_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Checking MongoDB connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/foods", foodRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
