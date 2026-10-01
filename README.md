# ♿ AI-Powered Accessibility Enhancement Platform

<p align="center">
  <b>Making Digital Content More Accessible, Readable, and User-Friendly</b>
</p>

<p align="center">
  A web-based platform that analyzes, simplifies, and enhances digital text content.
</p>

---

## 🌟 About the Project

The **AI-Powered Accessibility Enhancement Platform** is a web-based application designed to improve the **readability, accessibility, and usability of digital content**.

The platform provides multiple accessibility-focused features in a single application. Users can analyze text, identify accessibility issues, simplify complex content, listen to text using text-to-speech, enter content through speech recognition, check color contrast, and generate accessibility reports.

The main objective of this project is to make digital information **easier to read, understand, and access** for users with different accessibility needs.

---

## 🎯 Objectives

- ♿ Improve digital accessibility
- 📖 Enhance text readability
- ✨ Simplify complex content
- 🔊 Provide text-to-speech support
- 🎤 Support speech-to-text input
- 🎨 Check color contrast
- 📊 Analyze text and readability
- 📄 Generate accessibility reports
- 🗂️ Maintain report history

---

## 🚀 Key Features

| Feature | Description |
|--------|-------------|
| 🔍 **Accessibility Checker** | Analyzes text and identifies accessibility-related issues |
| ✨ **Text Simplification** | Converts complex content into simpler text |
| 🔊 **Text-to-Speech** | Converts written text into spoken audio |
| 🎤 **Speech Recognition** | Converts spoken input into written text |
| 🎨 **Color Contrast Checker** | Checks foreground and background color contrast |
| 📊 **Text Analysis** | Displays words, characters, sentences, reading time, and score |
| 📄 **Report Generation** | Generates downloadable PDF and TXT reports |
| 🗂️ **Report History** | Maintains previously generated accessibility results |
| 📱 **Responsive UI** | Provides a user-friendly interface across screen sizes |

---

## 🏗️ System Architecture

```text
                    👤 USER
                       │
                       ▼
            ┌─────────────────────┐
            │   React.js Frontend │
            │                     │
            │ • Dashboard         │
            │ • Accessibility     │
            │   Checker           │
            │ • Text Simplifier   │
            │ • Speech Features   │
            │ • Contrast Checker  │
            │ • Reports           │
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │ JavaScript Logic &  │
            │ Browser APIs        │
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │ Browser Local       │
            │ Storage             │
            └─────────────────────┘
```
 ## 💻 Frontend

The frontend is developed using modern web technologies to provide an interactive and responsive user interface.

Technologies Used
⚛️ React.js
🟨 JavaScript
🌐 HTML5
🎨 CSS3
⚡ Vite
📊 Recharts
📄 jsPDF
🎤 Web Speech API
Frontend Responsibilities
User interface and navigation
Text input and analysis
Accessibility result display
Text simplification
Speech recognition
Text-to-speech
Color contrast checking
Charts and visualizations
Report generation
Report history
Responsive design

 ## ⚙️ Backend / Application Logic

The current version uses JavaScript-based application logic and browser APIs to process and manage the application features.

The application logic handles:

📝 Text processing
🔍 Accessibility analysis
✨ Text simplification
🎤 Speech recognition
🔊 Text-to-speech
🎨 Color contrast checking
📄 Report preparation
💾 Local data management

Note: The current version does not use a separate Express, MySQL, or PostgreSQL backend server.
## 🗄️ Database / Storage
Browser Local Storage

The project uses Browser Local Storage for client-side data storage.

It can be used to maintain:

🗂️ Report history
⚙️ User preferences
💾 Application-related local data
Storage Details
Storage      : Browser Local Storage
Type         : Client-Side Storage
SQL Database : Not Used
PostgreSQL   : Not Used
🛠️ Tools & Technologies
Category	Technology
Frontend	React.js
Programming Language	JavaScript
Markup	HTML5
Styling	CSS3
Build Tool	Vite
Charts	Recharts
PDF Generation	jsPDF
Speech Features	Web Speech API
Storage	Browser Local Storage
Development Tool	Visual Studio Code
Version Control	Git
Repository	GitHub
## 📁 Project Structure
AccessibilityProject/
│
├── 📁 public/
├── 📁 src/
│   ├── 📁 components/
│   ├── 📁 pages/
│   ├── 📁 assets/
│   ├── 📄 App.jsx
│   └── 📄 main.jsx
│
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
## ⚡ Getting Started
1️⃣ Clone the Repository
git clone https://github.com/anandhijaya2006/AccessibilityProject.git
2️⃣ Open the Project
cd AccessibilityProject
3️⃣ Install Dependencies
npm install
4️⃣ Start the Development Server
npm run dev
5️⃣ Open in Browser

Vite will provide a local URL similar to:

http://localhost:5173/

Open the URL in Google Chrome.

🔄 Development Workflow
💡 Requirement Analysis
        ↓
🎨 UI/UX Design
        ↓
⚛️ React Project Setup
        ↓
🧩 Component Development
        ↓
🔍 Accessibility Analysis
        ↓
✨ Text Simplification
        ↓
🎤 Speech Features
        ↓
🎨 Contrast Checking
        ↓
📄 Report Generation
        ↓
🧪 Testing & Debugging
        ↓
🚀 GitHub Version Control