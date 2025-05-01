// backend/routes/doctors.js
const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// GET all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
});

router.post("/", async (req, res) => {
    try {
      const newDoctor = new Doctor(req.body);
      await newDoctor.save();
      res.status(201).json(newDoctor);
    } catch (err) {
      res.status(400).json({ message: "Error adding doctor", error: err.message });
    }
  });

  

module.exports = router;