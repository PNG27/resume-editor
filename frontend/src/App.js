import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resume, setResume] = useState({
    name: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (field, value) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  };

  const enhanceSection = async (field) => {
    try {
      const res = await axios.post("http://localhost:8000/ai-enhance", {
        section: field,
        content: resume[field],
      });
      handleChange(field, res.data.enhanced_content);
    } catch (err) {
      alert("Failed to enhance section.");
    }
  };

  const saveResume = async () => {
    try {
      await axios.post("http://localhost:8000/save-resume", resume);
      alert("Resume saved successfully!");
    } catch (err) {
      alert("Failed to save resume.");
    }
  };

  const downloadResume = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "resume.json";
    document.body.appendChild(element);
    element.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    // 👇 Fill dummy resume content on file upload
    setResume({
      name: "John Doe",
      summary:
        "Motivated software engineering student with internship experience.",
      experience: "Interned at XYZ Corp, worked on frontend and backend tasks.",
      education: "B.Tech in CSE, ABC University, 2025",
      skills: "React, Node.js, MongoDB, Java, Git",
    });
  };

  return (
    <div className="App">
      <h1>Resume Editor</h1>

      <div>
        <h3>Upload Resume (.pdf or .docx)</h3>
        <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        {fileName && <p>{fileName}</p>}
      </div>

      {["name", "summary", "experience", "education", "skills"].map((section) => (
        <div key={section}>
          <h3>{section.toUpperCase()}</h3>
          <textarea
            rows="3"
            cols="80"
            value={resume[section]}
            onChange={(e) => handleChange(section, e.target.value)}
            placeholder={`Enter ${section}`}
          />
          <br />
          <button onClick={() => enhanceSection(section)}>Enhance with AI</button>
        </div>
      ))}

      <br />
      <button onClick={saveResume}>Save Resume</button>
      <button onClick={downloadResume}>Download as JSON</button>
    </div>
  );
}

export default App;
