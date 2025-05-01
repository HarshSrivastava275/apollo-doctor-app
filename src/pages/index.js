import { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import Filter from "../components/Filter";
import Navbar from "@/components/Navbar";
import NavbarList from "@/components/NavbarList";
import Link from "next/link";
import FAQSection from "@/components/faq/FAQSection";
import Hero from "@/components/faq/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  const [price, setPrice] = useState(3000);
  const [sortOption, setSortOption] = useState("default");
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        console.log("Fetching doctors from http://localhost:8080/api/doctors");
        const response = await fetch("http://localhost:8080/api/doctors");
        console.log("Response Status:", response.status);
        if (!response.ok) {
          const errorText = await response.text();
          console.log("Response Error Text:", errorText);
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        setDoctors(data);
        setError(null);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(`Unable to load doctors. Please ensure the backend is running at http://localhost:8080. Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doc) => doc.price <= price);

  const sortDoctors = (doctorsList, option) => {
    const sorted = [...doctorsList];
    switch (option) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "experience":
        return sorted.sort((a, b) => b.experience - a.experience);
      default:
        return sorted;
    }
  };

  const sortedDoctors = sortDoctors(filteredDoctors, sortOption);

  return (
    <>
      <Navbar />
      <NavbarList />
      <main style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 20, minHeight: "70vh" }}>
          <div
            style={{
              flex: 3,
              overflowY: "auto",
              maxHeight: "70vh",
              border: "1px solid #ccc",
            }}
          >
            <Filter price={price} setPrice={setPrice} sortOption={sortOption} setSortOption={setSortOption} />
          </div>
          <div
            className="col-6"
            style={{
              flex: 6,
              overflowY: "auto",
              maxHeight: "70vh",
            }}
          >
            <div style={{ padding: 16 }}>
              <div className="row align-items-center">
                <div className="col-8">
                  <h1 style={{ fontSize: 28, fontWeight: "bold", margin: 0 }}>
                    Consult General Physicians Online - Internal Medicine Specialists
                  </h1>
                  <p style={{ margin: "8px 0 20px 0" }}>
                    Total Doctors: {loading ? "Loading..." : error ? "Error" : filteredDoctors.length}
                  </p>
                </div>
                <div className="col-4 text-end"></div>
              </div>
              <div>
                {loading ? (
                  <p>Loading doctors...</p>
                ) : error ? (
                  <p style={{ color: "red" }}>{error}</p>
                ) : sortedDoctors.length > 0 ? (
                  sortedDoctors.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                  ))
                ) : (
                  <p>No doctors found matching your criteria.</p>
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 3,
              overflowY: "auto",
              maxHeight: "70vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "250px",
                backgroundColor: "#001846",
                padding: "10px",
                color: "white",
                overflow: "hidden",
              }}
            >
              <img
                src="/doctors/consult_doctor.webp"
                alt="Doctorimage"
                style={{ width: "100%", height: "100px", objectFit: "cover" }}
                className="me-2"
              />
              <p className="mt-2 fw-bold">Need help? Consult the right Doctor.</p>
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                Call +91784849483 to book instantly
              </Link>
            </div>
          </div>
        </div>
        <Hero />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}