import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">

        <h1>About Our Platform</h1>

        <p className="about-subtitle">
          AI Powered Accessibility Enhancement Platform helps users improve
          readability, simplify content, generate accessibility reports,
          and create inclusive digital content.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              Make digital content accessible and easy to understand for everyone.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Features</h2>
            <p>
              Accessibility Checker, Text Simplification, Voice Support,
              Reports, Reading Time, PDF Export and more.
            </p>
          </div>

          <div className="about-card">
            <h2>🤖 AI Technology</h2>
            <p>
              Uses Artificial Intelligence concepts to improve accessibility
              and user experience.
            </p>
          </div>

          <div className="about-card">
            <h2>👨‍💻 Developed By</h2>
            <p>
              Final Year AI & DS Project
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default About;