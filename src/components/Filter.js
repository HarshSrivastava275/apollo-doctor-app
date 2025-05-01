// components/Filter.js
import { useState } from "react";

export default function Filter({ price, setPrice, sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div style={{ padding: 10 }}>
      <h4>Filter by Price</h4>
      <input
        type="range"
        min="0"
        max="3000"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <p>Max Price: ₹{price}</p>

      <div className="dropdown" style={{ marginTop: 20 }}>
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: "100%", textAlign: "left" }}
        >
          {sortOption === "default" ? "Sort by" : sortOption.replace("-", " ").replace("price", "Price").replace("experience", "Years of Experience")}
          <span style={{ float: "right" }}>▼</span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu show" style={{ width: "100%", position: "absolute", zIndex: 1000 }}>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("default")}>
                Relevance
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("availability")}>
                Availability
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("nearby")}>
                Nearby
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("price-low-high")}>
                Price - low to high
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("price-high-low")}>
                Price - high to low
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => handleSortChange("experience")}>
                Years of Experience
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}