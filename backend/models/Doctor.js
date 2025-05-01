// backend/models/Doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  clinic: { type: String, required: true },
  availability: { type: String, required: true },
});

module.exports = mongoose.model("Doctor", doctorSchema);