import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LineChartComponent from "../components/LineChartComponent";
import PieChartComponent from "../components/PieChartComponent";

function Dashboard() {
  const [stats, setStats] = useState({
  score: 0,
  reports: 0,
  texts: 0,
  words: 0,
});

useEffect(() => {
  setStats({
    score: localStorage.getItem("lastScore") || 0,
    reports: localStorage.getItem("totalReports") || 0,
    texts: localStorage.getItem("textsChecked") || 0,
    words: localStorage.getItem("lastWordCount") || 0,
  });
}, []);
    
  return (
    <>
<Navbar />
<div className="dashboard-page"></div>
<div className="welcome-card">

  <h1>Welcome Back, Admin 👋</h1>

  <p>
    Monitor accessibility reports, analyze content and improve user experience from your dashboard.
  </p>

</div>
   <div className="stats-container">

  <div className="stat-card">
    <h2>89%</h2>
    <p>Accessibility Score</p>
  </div>

  <div className="stat-card">
    <h2>25</h2>
    <p>Total Reports</p>
  </div>

  <div className="stat-card">
    <h2>18</h2>
    <p>Files Uploaded</p>
  </div>

  <div className="stat-card">
    <h2>120</h2>
    <p>Texts Checked</p>
  </div>

</div>

<div className="chart-section">

  <LineChartComponent />
  <PieChartComponent />

</div>
    <div className="quick-actions">

  <div className="action-card">
    <h3>📝 Accessibility Checker</h3>
    <p>Analyze and improve text accessibility.</p>
    <Link to="/checker">
      <button>Open</button>
    </Link>
  </div>

  <div className="action-card">
    <h3>📄 Reports</h3>
    <p>View and download generated reports.</p>
    <Link to="/reports">
      <button>Open</button>
    </Link>
  </div>

  <div className="action-card">
    <h3>ℹ️ About</h3>
    <p>Learn more about the platform.</p>
    <Link to="/about">
      <button>Open</button>
    </Link>
  </div>

</div>

  </>
);



  

}

export default Dashboard;