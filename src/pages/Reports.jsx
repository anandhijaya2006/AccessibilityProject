import Navbar from "../components/Navbar";

function Reports() {
  return (
    <>
      <Navbar />

      <div className="reports-page">

        <h1>Accessibility Reports</h1>

        <p className="reports-subtitle">
          View all generated accessibility reports.
        </p>

        <div className="report-table">

          <div className="table-header">
            <span>Report Name</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          <div className="table-row">
            <span>Accessibility Report 1</span>
            <span>Today</span>
            <span>✅ Completed</span>
          </div>

          <div className="table-row">
            <span>Accessibility Report 2</span>
            <span>Yesterday</span>
            <span>✅ Completed</span>
          </div>

          <div className="table-row">
            <span>Accessibility Report 3</span>
            <span>20 Jul</span>
            <span>⏳ Pending</span>
          </div>

        </div>

        <div className="summary-card">

          <h2>Latest Analysis</h2>

          <p><b>Accessibility Score :</b> 90%</p>

          <p><b>Words :</b> 250</p>

          <p><b>Characters :</b> 1450</p>

          <p><b>Reading Time :</b> 2 Minutes</p>

        </div>

      </div>

    </>
  );
}

export default Reports;