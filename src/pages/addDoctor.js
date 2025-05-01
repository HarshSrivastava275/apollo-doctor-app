// pages/add-doctor.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddDoctor() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    price: "",
    image: "",
    location: "",
    clinic: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to add doctor");

      alert("Doctor added successfully!");
      router.push("/"); // Redirect to homepage or listing
    } catch (error) {
      console.error(error);
      alert("Error adding doctor.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Add Doctor</button>
      </form>
    </div>
  );
}
