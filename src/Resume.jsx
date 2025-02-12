import React from 'react';

function Resume() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2>Resume</h2>
      <img 
        src="public/PICS/Screenshot 2025-02-12 013543.png" 
        alt="My Resume" 
        style={{ width: "80%", maxWidth: "600px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}
      />
      <br />
      <a 
        href="public/PICS/Screenshot 2025-02-12 013543.png" 
        download="public/PICS/Screenshot 2025-02-12 013543.png" 
        style={{ display: "inline-block", marginBottom: "40px", padding: "10px 20px", backgroundColor: "#007acc", color: "#fff", textDecoration: "none", borderRadius: "4px" }}
      >
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <ul style={{ listStyle: "none", padding: "0", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>HTML</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>CSS</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>JavaScript</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>React</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>Node.js</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>Express</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>MongoDB</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>MySQL</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>Git</li>
        <li style={{ backgroundColor: "#f0f0f0", margin: "5px", padding: "8px 12px", borderRadius: "4px" }}>GitHub</li>
      </ul>
    </div>
  );
}

export default Resume;
