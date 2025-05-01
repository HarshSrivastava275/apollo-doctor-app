// backend/seed.js
const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Doctor data
const doctors = [
  {
    name: "Dr. Arjun Singh",
    specialization: "Cardiologist",
    experience: 10,
    price: 2000,
    image: "/doctors/arjun.webp",
    location: "Mumbai",
    clinic: "HeartCare Hospital, Mumbai",
    availability: "Available at 10:00 AM",
  },
  {
    name: "Dr. Meera Patel",
    specialization: "Dermatologist",
    experience: 8,
    price: 1500,
    image: "/doctors/arjun.webp",
    location: "Delhi",
    clinic: "SkinWell Clinic, Delhi",
    availability: "Available at 02:00 PM",
  },
  {
    name: "Dr. Rahul Verma",
    specialization: "Orthopedic",
    experience: 5,
    price: 2500,
    image: "/doctors/arjun.webp",
    location: "Chennai",
    clinic: "BoneHealth Center, Chennai",
    availability: "Available at 03:30 PM",
  },
  {
    name: "Dr. Aravinthan R",
    specialization: "General Physician / Internal Medicine Specialist",
    experience: 6,
    price: 200,
    image: "/doctors/arjun.webp",
    location: "Coimbatore",
    clinic: "Medcare Clinics, Coimbatore",
    availability: "Available at 01:00 PM",
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    experience: 7,
    price: 1800,
    image: "/doctors/arjun.webp",
    location: "Bangalore",
    clinic: "KidzCare Clinic, Bangalore",
    availability: "Available at 11:00 AM",
  },
  {
    name: "Dr. Vikram Joshi",
    specialization: "Neurologist",
    experience: 12,
    price: 3000,
    image: "/doctors/arjun.webp",
    location: "Hyderabad",
    clinic: "NeuroCare Center, Hyderabad",
    availability: "Available at 04:00 PM",
  },
];

// Connect to MongoDB and seed data
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Clear existing data
    await Doctor.deleteMany();

    // Insert new data
    await Doctor.insertMany(doctors);
    console.log("Doctors data seeded successfully");

    // Disconnect
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
    mongoose.connection.close();
  });