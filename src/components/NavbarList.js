import Link from "next/link";

export default function NavbarList() {
  return (
    <>

<div className="d-flex border Navlist" style={{ padding: "10px" }}>
  <Link href="#" className="nav-link">Buy Medicines</Link>
  <Link href="#" className="nav-link">Find Doctors</Link>
  <Link href="#" className="nav-link">Lab Tests</Link>
  <Link href="#" className="nav-link">Circle Membership</Link>
  <Link href="#" className="nav-link">Health Records</Link>
  <Link href="#" className="nav-link">Diabetes Reversal</Link>
  <Link href="#" className="nav-link">Buy Insurance</Link>
</div>


    </>
  );
}
