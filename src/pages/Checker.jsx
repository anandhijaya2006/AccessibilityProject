import { useState } from "react";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import { jsPDF } from "jspdf";
import Footer from "../components/Footer";
import autoTable from "jspdf-autotable";

function Checker() {

  const [text, setText] = useState("");
  const [simpleText, setSimpleText] = useState("");
  const [result, setResult] = useState("");
  const [report, setReport] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [issues, setIssues] = useState([]);

  const getReportData = () => {
  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const characters = text.length;

  const sentences = text
    .split(/[.!?]+/)
    .filter((s) => s.trim() !== "").length;

  return {
    title: "AI Accessibility Report",
    date: new Date().toLocaleString(),
    originalContent: text,
    wordCount: words,
    characterCount: characters,
    sentenceCount: sentences,
    readingTime: Math.ceil(words / 200),
    accessibilityScore: score,
    status: "Good",
    simplifiedContent: simpleText,
  };
};

  return (
    <>
      <Navbar />
      

      <div className="dashboard">

        <h1>Accessibility Checker</h1>

        <TextInput
          text={text}
          setText={setText}
          fontSize={16}
        />

        <input
          className="file-upload"
  type="file"
  accept=".txt"
  onChange={(e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      setText(event.target.result);
    };

    reader.readAsText(file);
  }}
/>
        <div className="button-group"></div>

        <br /><br />

        <button
  onClick={() => {

    if (text.trim() === "") {
      setResult("Please enter some text.");
      return;
    }

    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text
      .split(/[.!?]+/)
      .filter(s => s.trim() !== "").length;
      setScore(calculatedScore);
      const foundIssues = [];

if (words > 300) {
  foundIssues.push("Long content detected.");
}

if (sentences > 20) {
  foundIssues.push("Too many sentences.");
}

if (characters > 2000) {
  foundIssues.push("Content is very lengthy.");
}

if (text.includes("utilize")) {
  foundIssues.push("Replace 'utilize' with 'use'.");
}

if (text.includes("Artificial Intelligence")) {
  foundIssues.push("Use the shorter form 'AI' where appropriate.");
}

if (foundIssues.length === 0) {
  foundIssues.push("No major accessibility issues found.");
}

setIssues(foundIssues);

    setResult(`

Accessibility Score : ${calculatedScore}%

Word Count : ${words}

Character Count : ${characters}

Sentence Count : ${sentences}

Status : Good

`);

  }}
>
  Check Accessibility
</button>
<button
  onClick={() => {

    let simplified = text;

    simplified = simplified.replaceAll(
      "Artificial Intelligence",
      "AI"
    );

    simplified = simplified.replaceAll(
      "utilize",
      "use"
    );

    simplified = simplified.replaceAll(
      "utilizing",
      "using"
    );

    simplified = simplified.replaceAll(
      "revolutionizing",
      "improving"
    );

    simplified = simplified.replaceAll(
      "technologies",
      "technology"
    );

    setSimpleText(simplified);

  }}
>
  Simplify Text
</button>
<button
  onClick={() => {

    if (text.trim() === "") {
      alert("Please enter some text.");
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);

  }}
>
  🔊 Speak
</button>
<button
  onClick={() => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };

  }}
>
  🎤 Start Listening
</button>
<button
  onClick={() => {
    
    let calculatedScore = 100;

// Long content
if (words > 300) {
  calculatedScore -= 10;
}

// Very long sentences
if (sentences > 20) {
  calculatedScore -= 10;
}

// Too many characters
if (characters > 2000) {
  calculatedScore -= 10;
}

// Empty text
if (words === 0) {
  calculatedScore = 0;
}

// Minimum score
if (calculatedScore < 0) {
  calculatedScore = 0;
}

setScore(calculatedScore);
      const reportData = getReportData();

    const reportText = `
AI ACCESSIBILITY REPORT

----------------------------------

Generated On:
${reportData.date}

----------------------------------

ORIGINAL CONTENT

${reportData.originalContent}

----------------------------------

TEXT ANALYSIS

Accessibility Score : ${reportData.accessibilityScore}%

Word Count : ${reportData.wordCount}

Character Count : ${reportData.characterCount}

Sentence Count : ${reportData.sentenceCount}

Reading Time : ${reportData.readingTime} minute(s)

Status : ${reportData.status}

----------------------------------

SIMPLIFIED CONTENT

${reportData.simplifiedContent}

----------------------------------

END OF REPORT
`;

    setReport(reportText);
    localStorage.setItem("lastScore", reportData.accessibilityScore);

localStorage.setItem("totalReports",
  Number(localStorage.getItem("totalReports") || 0) + 1
);

localStorage.setItem("textsChecked",
  Number(localStorage.getItem("textsChecked") || 0) + 1
);

localStorage.setItem("lastWordCount", reportData.wordCount);
    setHistory([
  ...history,
  {
    date: new Date().toLocaleString(),
    score: reportData.accessibilityScore,
    words: reportData.wordCount,
  },
]);

  }}
>
  Generate Report
</button>
<button
  onClick={() => {

    if (!report) {
      alert("Please generate report first.");
      return;
    }
    const reportData = getReportData();

    const doc = new jsPDF();

    // Cover Page
    doc.setFontSize(24);
    doc.text("AI Accessibility Report", 20, 30);

    doc.setFontSize(14);
    doc.text("AI Powered Accessibility Enhancement Platform", 20, 45);

    doc.text("Generated On: " + new Date().toLocaleString(), 20, 55);

    doc.addPage();

    // Statistics
    doc.setFontSize(18);
    doc.text("Accessibility Analysis", 20, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Parameter", "Value"]],
      body: [
        ["Accessibility Score", "90%"],
        ["Word Count", reportData.wordCount],
        ["Character Count", reportData.characterCount],
        ["Sentence Count", reportData.sentenceCount],
        ["Reading Time", reportData.readingTime + " min"],
        ["Status", reportData.status],
      ],
    });

    doc.addPage();

    doc.setFontSize(18);
    doc.text("Original Content", 20, 20);
doc.setFontSize(20);
doc.text("Original Content", 20, 20);

const lines = doc.splitTextToSize(
  reportData.originalContent,
  170
);

let y = 35;

for (let i = 0; i < lines.length; i++) {

  if (y > 270) {
    doc.addPage();
    y = 20;
  }

  doc.text(lines[i], 20, y);
  y += 8;
}

doc.addPage();

doc.setFontSize(22);
doc.text("Table of Contents", 20, 20);

doc.setFontSize(14);

doc.text("1. Executive Summary", 20, 40);
doc.text("2. Original Content", 20, 50);
doc.text("3. Accessibility Analysis", 20, 60);
doc.text("4. Simplified Content", 20, 70);
doc.text("5. Conclusion", 20, 80);

   // Executive Summary

doc.addPage();

doc.setFontSize(20);
doc.text("Executive Summary",20,20);

const summary = `
This report was generated using the AI Powered Accessibility Enhancement Platform.

The uploaded content was analyzed for accessibility, readability and text quality.

The report includes:

• Original Content
• Accessibility Analysis
• Reading Time
• Simplified Text
• Final Result
`;

const summaryLines = doc.splitTextToSize(summary,170);

doc.text(summaryLines,20,35);

// Original Content

doc.addPage();

doc.setFontSize(20);
doc.text("Original Content",20,20);
    const simple = doc.splitTextToSize(
      reportData.simplifiedContent || "No simplified content available.",
      170
    );

    doc.text(simple, 20, 35);
    // Add Header, Footer and Page Numbers

const pageCount = doc.getNumberOfPages();

for (let i = 1; i <= pageCount; i++) {

  doc.setPage(i);

  // Header
  doc.setFontSize(10);
  doc.setTextColor(100);

  doc.text(
    "AI Powered Accessibility Enhancement Platform",
    20,
    10
  );

  // Footer
  doc.text(
    "Generated on: " + new Date().toLocaleDateString(),
    20,
    290
  );

  // Page Number
  doc.text(
    `Page ${i} of ${pageCount}`,
    170,
    290
  );
}
// AI Recommendations Page

doc.addPage();

doc.setFontSize(20);
doc.text("AI Recommendations", 20, 20);

const recommendations = [

  "Use shorter sentences for better readability.",

  "Replace complex words with simple alternatives.",

  "Use headings and subheadings.",

  "Break long paragraphs into smaller sections.",

  "Use bullet points wherever possible.",

  "Maintain good color contrast.",

  "Use accessible fonts such as Arial or Verdana.",

  "Keep font size at least 16px.",

  "Add alternative text for images.",

  "Follow WCAG accessibility guidelines."

];

let recommendationY = 40;

recommendations.forEach((item) => {

  doc.text("• " + item, 20, recommendationY);

  recommendationY += 12;

});
// Conclusion Page

doc.addPage();

doc.setFontSize(20);
doc.text("Conclusion", 20, 20);

const conclusion = `
This accessibility report was generated using the AI Powered Accessibility Enhancement Platform.

The uploaded content has been analyzed successfully.

The report provides accessibility statistics, readability information,
AI-based recommendations and simplified content.

Overall Accessibility Score : 90%

Status : GOOD

This report can be used to improve accessibility and readability of digital content.
`;

const conclusionLines = doc.splitTextToSize(conclusion, 170);

doc.text(conclusionLines, 20, 40);

    doc.save("Accessibility_Report.pdf");

  }}
>
  📄 Download PDF
</button>
<button
  onClick={() => {

    const words =
      text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    const minutes = Math.ceil(words / 200);

    alert("Estimated Reading Time: " + minutes + " minute(s)");

  }}
>
  ⏱ Reading Time
</button>
<button
  onClick={() => {

    navigator.clipboard.writeText(simpleText);

    alert("Copied Successfully!");

  }}
>
  📋 Copy Simplified Text
</button>

<div className="contrast-card">

  <h2>🎨 Color Contrast Checker</h2>

  <div className="color-picker">

    <div>
      <label>Background Color</label>
      <input type="color" id="bgColor" />
    </div>

    <div>
      <label>Text Color</label>
      <input type="color" id="textColor" />
    </div>

  </div>

  <button
    onClick={() => {

      const bg = document.getElementById("bgColor").value;
      const txt = document.getElementById("textColor").value;

      if (bg === txt) {
        alert("❌ Poor Contrast");
      } else {
        alert("✅ Good Contrast");
      }

    }}
  >
    Check Contrast
  </button>

</div>

<br /><br />
<br /><br />

<br /><br />
<div className="progress">
<div className="result-grid"></div>
  <div
    className="progress-bar"
    style={{
      width: score + "%",
      background:
        score >= 80
          ? "green"
          : score >= 50
          ? "orange"
          : "red"
    }}
  >
    {score}%
  </div>

</div>



       

       <div className="result-grid">
       <div className="output-card">
  <h2>⚠ Accessibility Issues</h2>

  <ul>
    {issues.map((issue, index) => (
      <li key={index}>{issue}</li>
    ))}
  </ul>
</div>

  <div className="output-card">
    <h2>📊 Accessibility Result</h2>
    <pre>{result}</pre>
  </div>

  <div className="output-card">
    <h2>📝 Simplified Text</h2>
    <div>{simpleText}</div>
  </div>

  <div className="output-card">
    <h2>📄 Accessibility Report</h2>
    <pre>{report}</pre>
  </div>

</div>
<div className="output-card">
  <h2>📋 Report History</h2>

  {history.length === 0 ? (
    <p>No reports generated yet.</p>
  ) : (
    history.map((item, index) => (
      <div
        key={index}
        style={{
          borderBottom: "1px solid #ddd",
          padding: "10px 0",
        }}
      >
        <strong>{item.date}</strong>

        <br />

        Score : {item.score}%

        <br />

        Words : {item.words}
      </div>
    ))
  )}
</div>

      </div>
      <Footer />
    </>
  );
}

export default Checker;