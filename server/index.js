// server/index.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const workerRoutes = require("./routes/worker");

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Worker routes
app.use("/api/worker", workerRoutes);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});