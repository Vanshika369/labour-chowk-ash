// server/routes/worker.js
const express = require("express");
const Worker = require("../models/worker.js");
const router = express.Router();
const bcrypt = require("bcrypt");

// Worker registration route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, phoneNumber, address, skills } =
      req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ error: "Invalid phone number format." });
    }

    // Check if user with the same email already exists
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res
        .status(400)
        .json({ error: "Worker with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new worker
    const newWorker = new Worker({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      skills,
      // Add more fields as needed
    });

    // Save the worker to the database
    await newWorker.save();

    res.status(201).json({ message: "Worker registered successfully." });
  } catch (error) {
    console.error("Error registering worker:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all workers route
router.get("/all", async (req, res) => {
  try {
    const allWorkers = await Worker.find();
    res.status(200).json(allWorkers);
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get worker by ID
router.get("/:id", async (req, res) => {
  try {
    const workerId = req.params.id;

    // Check if the worker with the given ID exists
    const worker = await Worker.findById(workerId);

    if (!worker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    res.status(200).json(worker);
  } catch (error) {
    console.error("Error fetching worker by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get worker by email
router.get("/email/:email", async (req, res) => {
  try {
    const workerEmail = req.params.email;

    // Check if the worker with the given email exists
    const worker = await Worker.findOne({ email: workerEmail });

    if (!worker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    res.status(200).json(worker);
  } catch (error) {
    console.error("Error fetching worker by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Modify worker by id
router.put("/modify/:id", async (req, res) => {
  try {
    const { username, password, phoneNumber, address, skills } = req.body;

    const workerId = req.params.id;

    // Check if the worker with the given ID exists
    const existingWorker = await Worker.findById(workerId);

    if (!existingWorker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    // Update worker details
    existingWorker.username = username;
    existingWorker.password = password
      ? await bcrypt.hash(password, 10)
      : existingWorker.password;
    existingWorker.phoneNumber = phoneNumber;
    existingWorker.address = address;
    existingWorker.skills = skills;
    // Exclude email from being updated

    // Save the updated worker to the database
    await existingWorker.save();

    res.status(200).json({ message: "Worker modified successfully." });
  } catch (error) {
    console.error("Error modifying worker:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Modify worker by email
router.put("/modify/email/:email", async (req, res) => {
  try {
    const {
      username,
      password,
      phoneNumber,
      address,
      skills,
      // Exclude email from being updated
    } = req.body;

    const workerEmail = req.params.email;

    // Check if the worker with the given email exists
    const existingWorker = await Worker.findOne({ email: workerEmail });

    if (!existingWorker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    // Update worker details
    existingWorker.username = username;
    existingWorker.password = password ? await bcrypt.hash(password, 10) : existingWorker.password; // Update password only if provided
    existingWorker.phoneNumber = phoneNumber;
    existingWorker.address = address;
    existingWorker.skills = skills;
    // Exclude email from being updated

    // Save the updated worker to the database
    await existingWorker.save();

    res.status(200).json({ message: "Worker modified successfully." });
  } catch (error) {
    console.error("Error modifying worker by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a worker by email route
router.delete("/delete/email/:email", async (req, res) => {
  try {
    const workerEmail = req.params.email;

    // Check if the worker with the given email exists
    const existingWorker = await Worker.findOne({ email: workerEmail });

    if (!existingWorker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    // Delete the worker from the database
    await existingWorker.remove();

    res.status(200).json({ message: "Worker deleted successfully." });
  } catch (error) {
    console.error("Error deleting worker by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a worker by ID route
router.delete("/delete/:id", async (req, res) => {
  try {
    const workerId = req.params.id;

    // Check if the worker with the given ID exists
    const existingWorker = await Worker.findById(workerId);

    if (!existingWorker) {
      return res.status(404).json({ error: "Worker not found." });
    }

    // Delete the worker from the database
    await existingWorker.remove();

    res.status(200).json({ message: "Worker deleted successfully." });
  } catch (error) {
    console.error("Error deleting worker by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;



// For some reason, delete requests are not working, have to check what is the issue persistent.