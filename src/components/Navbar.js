 
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary px-4">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    {/* Left: Logo + Brand */}
    <div className="d-flex align-items-center">
      <img
        src="/doctors/apollo247.svg" 
        alt="Apollo Logo"
        width="40"
        height="40"
        className="me-2"
      />
    </div>

    {/* Center: Search Bar */}
    <form className="d-flex" role="search" style={{ width: "50%" }}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search doctors"
        aria-label="Search"
        style={{ flex: 1 }}
      />
    </form>

    {/* Right: Sign Up Button */}
    <button className="btn btn-primary">Sign Up</button>
    <Link href="/addDoctor"  className="btn btn-primary">List Your Practice</Link>

  </div>
</nav>



  );
}
