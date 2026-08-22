import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Navbar from "./components/Navbar";
import { jsPDF } from "jspdf";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Checker from "./pages/Checker";
import Reports from "./pages/Reports";
import About from "./pages/About";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [simpleText, setSimpleText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [report, setReport] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [tips, setTips] = useState([]);
  const [history, setHistory] = useState([]);
  const [highlightText, setHighlightText] = useState("");

return (
    <>
      <Navbar />

      <div className={darkMode ? "container dark" : "container"}>
        <div className="banner"></div>
        <img
  src={logo}
  alt="Logo"
  width="90"
/>

        <h1>AI Powered Accessibility Enhancement Platform</h1>
        <p className="about">
This platform helps users improve text accessibility by analyzing readability,
providing accessibility tips, simplifying text, converting text to speech,
accepting voice input, generating reports, and offering accessibility statistics.
</p>


        <h3>Enter Your Text</h3>
        <input
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

<br /><br />

        <TextInput
          text={text}
          setText={setText}
          fontSize={fontSize}
        />

      
      <br /><br />

      <button
      onClick={() => {

  if (text.trim() === "") {
    setResult("Please enter some text.");
    return;
  }

  const words = text.trim().split(/\s+/).length;
  const characters = text.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "").length;

  let score = 100;
  let suggestions = [];

  if (words > 30) {
    score -= 20;
    suggestions.push("• Use shorter sentences.");
  }

  if (characters > 200) {
    score -= 10;
    suggestions.push("• Reduce paragraph length.");
  }

  if (text === text.toUpperCase()) {
    score -= 20;
    suggestions.push("• Avoid writing everything in CAPITAL letters.");
  }

  if (suggestions.length === 0) {
    suggestions.push("• Excellent! Your text is easy to read.");
  }
  setScore(score);
  setTips(suggestions);

  setResult(
    
`Accessibility Score : ${score}%

Word Count : ${words}

Character Count : ${characters}

Sentence Count : ${sentences}

Suggestions:
${suggestions.join("\n")}`
  );
  setHistory([
  ...history,
  {
    text: text,
    score: score
  }
]);

}}
>
  Check Accessibility
</button>
<br /><br />

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
<br /><br />

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
<br /><br />

<button
  onClick={() => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setText(voiceText);
    };

  }}
>
  🎤 Start Listening
</button>
<br /><br />

<button
  onClick={() => setFontSize(fontSize + 2)}
>
  A+
</button>
<button
  onClick={() => setFontSize(fontSize - 2)}
>
  A-
</button>
<button
  onClick={() => {

    setText("");
    setResult("");
    setSimpleText("");

  }}
>
  🗑 Clear
</button>
<br /><br />

<button
  onClick={() => {

    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim() !== "").length;

    let score = 100;

    if(words > 30)
      score -= 20;

    if(characters > 200)
      score -= 10;

    const reportText = `

ACCESSIBILITY REPORT

----------------------------

Accessibility Score : ${score}%

Word Count : ${words}

Character Count : ${characters}

Sentence Count : ${sentences}

Status : Good

Generated Successfully

`;

    setReport(reportText);

  }}
>
Generate Report
</button>
<button
onClick={() => {

const blob = new Blob([report], {type:"text/plain"});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "Accessibility_Report.txt";

link.click();

}}
>
Download Report
</button>
<button
  onClick={() => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Accessibility Report", 20, 20);

    doc.setFontSize(12);
    doc.text(report || "No report generated.", 20, 40);

    doc.save("Accessibility_Report.pdf");
  }}
>
  📄 Download PDF
</button>
<button
onClick={()=>setDarkMode(!darkMode)}
>
🌙 Dark Mode
</button>
<div className="progress">

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



      <h3>Simplified Text</h3>
      <h3>Accessibility Report</h3>
      <h3>Accessibility Tips</h3>
      <h3>History</h3>
      <h3>Highlighted Text</h3>
      <h3>Accessibility Statistics</h3>
      <div className="stats">

  <div className="card">
    <h2>{score}%</h2>
    <p>Accessibility Score</p>
  </div>

  <div className="card">
    <h2>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</h2>
    <p>Words</p>
  </div>

  <div className="card">
    <h2>{text.length}</h2>
    <p>Characters</p>
  </div>

  <div className="card">
    <h2>{text.split(/[.!?]+/).filter(s => s.trim() !== "").length}</h2>
    <p>Sentences</p>
  </div>

</div>

<div className="output">
  {highlightText}
</div>

<div className="output">

  {history.map((item, index) => (

    <p key={index}>
      {item.text} - {item.score}%
    </p>

  ))}

</div>

<div className="output">
  {tips.map((tip, index) => (
    <p key={index}>{tip}</p>
  ))}
</div>
      <h3>Color Contrast Checker</h3>

<label>Background Color</label>

<input
  type="color"
  id="bgColor"
/>

<br /><br />

<label>Text Color</label>

<input
  type="color"
  id="textColor"
/>

<br /><br />

<button
  onClick={() => {

    const bg = document.getElementById("bgColor").value;
    const txt = document.getElementById("textColor").value;

    if(bg === txt){

      alert("❌ Poor Contrast");

    }else{

      alert("✅ Good Contrast");

    }

  }}
>
Check Contrast
</button>
<button
onClick={()=>{

const words=text.trim().split(/\s+/).length;

const minutes=Math.ceil(words/200);

alert("Estimated Reading Time : "+minutes+" minute(s)");

}}
>
Reading Time
</button>
<button
onClick={()=>{

navigator.clipboard.writeText(simpleText);

alert("Copied Successfully");

}}
>
📋 Copy Simplified Text
</button>
<button
onClick={() => {

setText("");
setResult("");
setSimpleText("");
setReport("");
setTips([]);
setHistory([]);
setHighlightText("");
setScore(0);

}}
>
🔄 Reset All
</button>

<br /><br />
<button
onClick={() => {

const words = text.split(" ");

const output = words.map(word =>

word.length > 8 ? `[${word}]` : word

);

setHighlightText(output.join(" "));

}}
>
Highlight Long Words
</button>

<br /><br />

<div className="output">
    <pre>{report}</pre>
</div>

<div className="output">
  {simpleText}
</div>
<Footer />
    </div>
    </>
  );
}


export default App;