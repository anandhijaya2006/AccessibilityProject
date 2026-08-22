import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

     <div className="logo">
  🧑‍🦽 AI Accessibility Platform
</div>
<div className="nav-links">

  <Link to="/dashboard">🏠 Dashboard</Link>

  <Link to="/checker">📝 Checker</Link>

  <Link to="/reports">📄 Reports</Link>

  <Link to="/about">ℹ️ About</Link>

  <Link to="/">🚪 Logout</Link>

</div>

    </nav>
  );
}

export default Navbar;