// server/routes/employer.js
const express = require("express");
const Employer = require("../models/employer.js");
const router = express.Router();
const bcrypt = require("bcrypt");

// Employer registration route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, phoneNumber, address } = req.body;

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
    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return res
        .status(400)
        .json({ error: "Employer with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employer
    const newEmployer = new Employer({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });

    // Save the employer to the database
    await newEmployer.save();

    res.status(201).json({ message: "Employer registered successfully." });
  } catch (error) {
    console.error("Error registering employer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all employers route
router.get("/all", async (req, res) => {
  try {
    const allEmployers = await Employer.find();
    res.status(200).json(allEmployers);
  } catch (error) {
    console.error("Error fetching employers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get employer by ID
router.get("/:id", async (req, res) => {
  try {
    const employerId = req.params.id;

    // Check if the employer with the given ID exists
    const employer = await Employer.findById(employerId);

    if (!employer) {
      return res.status(404).json({ error: "Employer not found." });
    }

    res.status(200).json(employer);
  } catch (error) {
    console.error("Error fetching employer by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get employer by email
router.get("/email/:email", async (req, res) => {
  try {
    const employerEmail = req.params.email;

    // Check if the employer with the given email exists
    const employer = await Employer.findOne({ email: employerEmail });

    if (!employer) {
      return res.status(404).json({ error: "Employer not found." });
    }

    res.status(200).json(employer);
  } catch (error) {
    console.error("Error fetching employer by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Modify employer by id
router.put("/modify/:id", async (req, res) => {
  try {
    const { username, password, phoneNumber, address } = req.body;

    const employerId = req.params.id;

    // Check if the employer with the given ID exists
    const existingEmployer = await Employer.findById(employerId);

    if (!existingEmployer) {
      return res.status(404).json({ error: "Employer not found." });
    }

    // Update employer details
    existingEmployer.username = username;
    existingEmployer.password = password
      ? await bcrypt.hash(password, 10)
      : existingEmployer.password;
    existingEmployer.phoneNumber = phoneNumber;
    existingEmployer.address = address;

    // Save the updated employer to the database
    await existingEmployer.save();

    res.status(200).json({ message: "Employer modified successfully." });
  } catch (error) {
    console.error("Error modifying employer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an employer by email route
router.delete("/delete/email/:email", async (req, res) => {
  try {
    const employerEmail = req.params.email;

    // Check if the employer with the given email exists
    const existingEmployer = await Employer.findOne({ email: employerEmail });

    if (!existingEmployer) {
      return res.status(404).json({ error: "Employer not found." });
    }

    // Delete the employer from the database
    await existingEmployer.remove();

    res.status(200).json({ message: "Employer deleted successfully." });
  } catch (error) {
    console.error("Error deleting employer by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an employer by ID route
router.delete("/delete/:id", async (req, res) => {
  try {
    const employerId = req.params.id;

    // Check if the employer with the given ID exists
    const existingEmployer = await Employer.findById(employerId);

    if (!existingEmployer) {
      return res.status(404).json({ error: "Employer not found." });
    }

    // Delete the employer from the database
    await existingEmployer.remove();

    res.status(200).json({ message: "Employer deleted successfully." });
  } catch (error) {
    console.error("Error deleting employer by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
