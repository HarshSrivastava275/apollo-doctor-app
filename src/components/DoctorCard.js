// DoctorCard.js
export default function DoctorCard({ doctor }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        borderRadius: 10,
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        width: "100%", // Take full width of the parent
      }}
    >
      <img
        src={doctor.image}
        alt={doctor.name}
        style={{
          width: 80,
          height: 80,
          objectFit: "cover",
          borderRadius: 8,
          marginTop: 8,
        }}
      />

      <div style={{ flex: 1 }}>
        <h2 style={{ margin: "0 0 4px 0", fontSize: "18px" }}>{doctor.name}</h2>
        <p style={{ margin: "0 0 4px 0", color: "#6a737d" }}>
          {doctor.specialization}
        </p>
        <p style={{ margin: "0 0 4px 0", color: "#6a737d" }}>
          {doctor.experience} YEARS • MBBS, DNB GENERAL MEDICINE
        </p>
        <p style={{ margin: "0 0 4px 0", color: "#6a737d" }}>
          {doctor.location}
        </p>
        <p style={{ margin: "0 0 4px 0", color: "#6a737d" }}>
          {doctor.clinic}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <p style={{ margin: 0, fontWeight: "bold", color: "green" }}>
            ₹{doctor.price}
          </p>
          <span style={{ color: "#6a737d", fontSize: "12px" }}>
            | No Booking Fees
          </span>
        </div>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Visit Doctor
          <br />
          <span style={{ fontSize: "12px" }}>
            {doctor.availability}
          </span>
        </button>
      </div>
    </div>
  );
}