import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <nav className="home-navbar">

        <h2>🧑‍🦽 AI Accessibility</h2>

        <Link to="/login">
          <button>Login</button>
        </Link>

      </nav>

      <div className="home-hero">

        <h1>
          AI Powered Accessibility
          <br />
          Enhancement Platform
        </h1>

        <p>
          Improve readability, simplify content,
          generate accessibility reports and build
          inclusive digital experiences.
        </p>

        <Link to="/login">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>

      </div>
      <div className="features">

  <h2>Our Features</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <h3>📝 Accessibility Checker</h3>
      <p>Analyze text and improve accessibility.</p>
    </div>

    <div className="feature-card">
      <h3>🤖 AI Text Simplifier</h3>
      <p>Simplify difficult content using AI techniques.</p>
    </div>

    <div className="feature-card">
      <h3>📄 Reports</h3>
      <p>Generate accessibility reports in PDF and TXT.</p>
    </div>

    <div className="feature-card">
      <h3>🔊 Voice Support</h3>
      <p>Listen to your content using speech synthesis.</p>
    </div>

  </div>
  <div className="stats-section">

  <h2>Platform Statistics</h2>

  <div className="stats-grid">

    <div className="stats-box">
      <h1>500+</h1>
      <p>Texts Analyzed</p>
    </div>

    <div className="stats-box">
      <h1>120+</h1>
      <p>Reports Generated</p>
    </div>

    <div className="stats-box">
      <h1>95%</h1>
      <p>Accessibility Score</p>
    </div>

    <div className="stats-box">
      <h1>24/7</h1>
      <p>AI Support</p>
    </div>

  </div>

</div>

</div>

    </div>
  );
}

export default Home;